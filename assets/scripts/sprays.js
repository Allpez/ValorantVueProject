/*------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------- Logica de sprays.js ----------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------*/

//  Llamamos a la Api a trabajar
const urlApi = 'https://valorant-api.com/v1/sprays'

//  Llamamos a la Libreria Vue
const { createApp } = Vue

//  Creamos la aplicacion
const app = createApp({
    data() {
        return {
            datosSprays: [],
            datosSpraysBK: [],
            textoBuscar: '',
            categorias: [],
            categoriasSeleccionada: [],
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
                    this.datosSpraysBK = this.datosSprays
                })
        },
    },
    computed: {
        superFiltro() {
            let primerFiltro = this.datosSpraysBK.filter((e) =>
                e.displayName.toLowerCase().includes(this.textoBuscar.toLowerCase())
            )

            this.datosSpraysBK = primerFiltro
        },
    },
}).mount('#app')
