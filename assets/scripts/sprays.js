/*------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------- Logica de sprays.js ----------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------*/

//  Llamamos a la Api a trabajar
const urlApi = 'https://valorant-api.com/v1/sprays'


fetch(urlApi)
    .then((response) => response.json())
    .then((info) => {
        console.log(info.data)
        
    })

//  Llamamos a la Libreria Vue
const { createApp } = Vue

//  Creamos la aplicacion
const app = createApp({
    data() {
        return {
            datosSprays: [],
        }
    },
    created() {
        this.traerData(urlApi)
        
    },
    methods: {
        traerData(url) {
            fetch(url)
                .then((response) => response.json())
                .then((info) => {
                    this.datosSprays = info.data
                    console.log(this.datosSprays)
                })
        },
    },
    computed: {},
}).mount('#app')
