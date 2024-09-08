const urlApi = "https://valorant-api.com/";
const urlAgent = `${urlApi}v1/agents`;
const urlMaps = `${urlApi}v1/maps`;
const urlPlayer = `${urlApi}v1/playercards`;
const urlSpray = `${urlApi}v1/sprays`;
const urlWeapon = `${urlApi}v1/weapons`;



const { createApp } = Vue //Estamos trayendo una función "createApp" que esta en el objeto VUE, variable global

//crear una app
const app = createApp({
    data() { //data va a retornar una info globalmente a la aplicacion, guardado de la info
        return {
            agent: [],
            map: [],
            player: [],
            spray: [],
            weapon: []
        }
    },
    created() { //las cosas que se van a ejecutar la primera vez que se levante la pagina al inicio
        this.traerData(urlAgent, 'agent')
        this.traerData(urlMaps, 'map')
        this.traerData(urlPlayer, 'player')
        this.traerData(urlSpray, 'spray')
        this.traerData(urlWeapon, 'weapon')

    },
    methods: { //objeto con varias funciones o elementos, funciones moduladas
        traerData(url, tipo) {
            fetch(url).then(Response => Response.json()).then(info => {
                if (tipo === 'map') {
                    this.map = info.data;
                } else if (tipo === 'agent') {
                    this.agent = info.data; 
                } else if (tipo === 'player') {
                    this.player = info.data; 
                }else if (tipo === 'weapon') {
                    this.weapon = info.data; 
                } else if (tipo === 'spray') {
                    this.spray = info.data; 
                }
            })
        }
    }
}).mount('#app') //se creo la aplicacion vue que se va a montar en el contenedor app

