const urlApi = 'https://valorant-api.com/'
const urlAgent = `${urlApi}v1/agents`
const urlMaps = `${urlApi}v1/maps`
const urlPlayer = `${urlApi}v1/playercards`
const urlSpray = `${urlApi}v1/sprays`
const urlWeapon = `${urlApi}v1/weapons`

/*
fetch(urlAgent)
    .then((response) => response.json())
    .then((dataFinal) => {
        console.log(dataFinal.data)

        let aleatorio1 = dataFinal.data[Math.floor(Math.random() * dataFinal.data.length)]
        console.log(aleatorio1)
        let aleatorio2 = dataFinal.data[Math.floor(Math.random() * dataFinal.data.length)]
        console.log(aleatorio2)
        let aleatorio3 = dataFinal.data[Math.floor(Math.random() * dataFinal.data.length)]
        console.log(aleatorio3)
        let aleatorio4 = dataFinal.data[Math.floor(Math.random() * dataFinal.data.length)]
        console.log(aleatorio4)
        let aleatorio5 = dataFinal.data[Math.floor(Math.random() * dataFinal.data.length)]
        console.log(aleatorio5)

        let array = []

        array = array.concat(aleatorio1, aleatorio2, aleatorio3, aleatorio4, aleatorio5)
        console.log(array)
    })*/

const { createApp } = Vue //Estamos trayendo una función "createApp" que esta en el objeto VUE, variable global

//crear una app
const app = createApp({
    data() {
        //data va a retornar una info globalmente a la aplicacion, guardado de la info
        return {
            dataAgent: [],
            arrayAgent: [],

            dataMaps: [],
            arrayMaps: [],

            dataPlayer: [],
            arrayPlayer: [],

            dataSpray: [],
            arraySpray: [],

            dataWeapon: [],
            arrayWeapon: [],
        }
    },
    created() {
        //las cosas que se van a ejecutar la primera vez que se levante la pagina al inicio
        this.mostrarCarruselAgent(urlAgent)
        this.mostrarCarruselMaps(urlMaps)
        this.mostrarCarruselPlayer(urlPlayer)
        this.mostrarCarruselSpray(urlSpray)
        this.mostrarCarruselWeapon(urlWeapon)
    },
    methods: {
        //objeto con varias funciones o elementos, funciones moduladas
        mostrarCarruselAgent(url) {
            fetch(url)
                .then((response) => response.json())
                .then((info) => {
                    this.dataAgent = info.data
                    //console.log(this.dataAgent)

                    let aleatorio1 =
                        this.dataAgent[Math.floor(Math.random() * this.dataAgent.length)]
                    //console.log(aleatorio1)
                    let aleatorio2 =
                        this.dataAgent[Math.floor(Math.random() * this.dataAgent.length)]
                    //console.log(aleatorio2)
                    let aleatorio3 =
                        this.dataAgent[Math.floor(Math.random() * this.dataAgent.length)]
                    //console.log(aleatorio3)
                    let aleatorio4 =
                        this.dataAgent[Math.floor(Math.random() * this.dataAgent.length)]
                    //console.log(aleatorio4)
                    let aleatorio5 =
                        this.dataAgent[Math.floor(Math.random() * this.dataAgent.length)]
                    //console.log(aleatorio5)

                    this.arrayAgent = this.arrayAgent.concat(
                        aleatorio1,
                        aleatorio2,
                        aleatorio3,
                        aleatorio4,
                        aleatorio5
                    )
                    console.log(this.arrayAgent)
                })
        },
        mostrarCarruselPlayer(url) {
            fetch(url)
                .then((response) => response.json())
                .then((info) => {
                    this.dataPlayer = info.data
                    //console.log(this.dataPlayer)

                    let aleatorio1 =
                        this.dataPlayer[Math.floor(Math.random() * this.dataPlayer.length)]
                    console.log(aleatorio1)
                    let aleatorio2 =
                        this.dataPlayer[Math.floor(Math.random() * this.dataPlayer.length)]
                    console.log(aleatorio2)
                    let aleatorio3 =
                        this.dataPlayer[Math.floor(Math.random() * this.dataPlayer.length)]
                    console.log(aleatorio3)
                    let aleatorio4 =
                        this.dataPlayer[Math.floor(Math.random() * this.dataPlayer.length)]
                    console.log(aleatorio4)
                    let aleatorio5 =
                        this.dataPlayer[Math.floor(Math.random() * this.dataPlayer.length)]
                    console.log(aleatorio5)

                    this.arrayPlayer = this.arrayPlayer.concat(
                        aleatorio1,
                        aleatorio2,
                        aleatorio3,
                        aleatorio4,
                        aleatorio5
                    )
                    console.log(this.arrayPlayer)
                })
        },
        mostrarCarruselMaps(url) {
            fetch(url)
                .then((response) => response.json())
                .then((info) => {
                    this.dataMaps = info.data
                    //console.log(this.dataMaps)

                    let aleatorio1 = this.dataMaps[Math.floor(Math.random() * this.dataMaps.length)]
                    console.log(aleatorio1)
                    let aleatorio2 = this.dataMaps[Math.floor(Math.random() * this.dataMaps.length)]
                    console.log(aleatorio2)
                    let aleatorio3 = this.dataMaps[Math.floor(Math.random() * this.dataMaps.length)]
                    console.log(aleatorio3)
                    let aleatorio4 = this.dataMaps[Math.floor(Math.random() * this.dataMaps.length)]
                    console.log(aleatorio4)
                    let aleatorio5 = this.dataMaps[Math.floor(Math.random() * this.dataMaps.length)]
                    console.log(aleatorio5)

                    this.arrayMaps = this.arrayMaps.concat(
                        aleatorio1,
                        aleatorio2,
                        aleatorio3,
                        aleatorio4,
                        aleatorio5
                    )
                    console.log(this.arrayMaps)
                })
        },
        mostrarCarruselSpray(url) {
            fetch(url)
                .then((response) => response.json())
                .then((info) => {
                    this.dataSpray = info.data
                    //console.log(this.dataSpray)

                    let aleatorio1 = this.dataSpray[Math.floor(Math.random() * this.dataSpray.length)]
                    console.log(aleatorio1)
                    let aleatorio2 = this.dataSpray[Math.floor(Math.random() * this.dataSpray.length)]
                    console.log(aleatorio2)
                    let aleatorio3 = this.dataSpray[Math.floor(Math.random() * this.dataSpray.length)]
                    console.log(aleatorio3)
                    let aleatorio4 = this.dataSpray[Math.floor(Math.random() * this.dataSpray.length)]
                    console.log(aleatorio4)
                    let aleatorio5 = this.dataSpray[Math.floor(Math.random() * this.dataSpray.length)]
                    console.log(aleatorio5)

                    this.arraySpray = this.arraySpray.concat(
                        aleatorio1,
                        aleatorio2,
                        aleatorio3,
                        aleatorio4,
                        aleatorio5
                    )
                    console.log(this.arraySpray)
                })
        },
        mostrarCarruselWeapon(url) {
            fetch(url)
                .then((response) => response.json())
                .then((info) => {
                    this.dataWeapon = info.data
                    //console.log(this.dataWeapon)

                    let aleatorio1 = this.dataWeapon[Math.floor(Math.random() * this.dataWeapon.length)]
                    console.log(aleatorio1)
                    let aleatorio2 = this.dataWeapon[Math.floor(Math.random() * this.dataWeapon.length)]
                    console.log(aleatorio2)
                    let aleatorio3 = this.dataWeapon[Math.floor(Math.random() * this.dataWeapon.length)]
                    console.log(aleatorio3)
                    let aleatorio4 = this.dataWeapon[Math.floor(Math.random() * this.dataWeapon.length)]
                    console.log(aleatorio4)
                    let aleatorio5 = this.dataWeapon[Math.floor(Math.random() * this.dataWeapon.length)]
                    console.log(aleatorio5)

                    this.arrayWeapon = this.arrayWeapon.concat(
                        aleatorio1,
                        aleatorio2,
                        aleatorio3,
                        aleatorio4,
                        aleatorio5
                    )
                    console.log(this.arrayWeapon)
                })
        },
    },
}).mount('#app') //se creo la aplicacion vue que se va a montar en el contenedor app
