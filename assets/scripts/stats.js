/*------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------- Logica de Stats.js ----------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------*/

//  Llamamos a la Api a trabajar
const urlApi = 'https://valorant-api.com/v1/events'

//  Llamamos a la Libreria Vue
const { createApp } = Vue

//  Creamos la aplicacion
const app = createApp({
    data() {
        return {
            datosStats: [],
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
                    this.datosStats = info.data

                })
        },
    },
    computed: {},
}).mount('#app')
