/*------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------- Logica de sprays.js ----------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------*/

//  Llamamos a la Api a trabajar
const urlApi = 'https://valorant-api.com/v1/sprays'

fetch(urlApi)
    .then((response) => response.json())
    .then((dataFinal) => {
        console.log(dataFinal.data)

        let vari="ar"

        const arregloFiltroLetra = dataFinal.data.filter((e) =>
            e.displayName.toLowerCase().includes(vari.toLowerCase())
          );
          console.log(arregloFiltroLetra);
    })



//  Llamamos a la Libreria Vue
const { createApp } = Vue

//  Creamos la aplicacion
const app = createApp({
    data() {
        return {
            datosSprays: [],
            textoBuscar: '',
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
    computed: {
        superFiltro() {
            let primerFiltro = this.datosSprays.filter((e) =>
                e.displayName.toLowerCase().includes(this.textoBuscar.toLowerCase())
            )
            console.log(primerFiltro);
            this.datosSprays = primerFiltro
        },
    },
}).mount('#app')
