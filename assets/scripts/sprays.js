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
            favoritos: [],
            textoBuscar: '',
            activeSwitch: 'asc',
        }
    },
    created() {
        this.traerData(urlApi);
        let datosLocal = JSON.parse(localStorage.getItem('favoritosSprays'));
        if (datosLocal && Array.isArray(datosLocal)) { //es importante porque si no encuentra info se va a romper porque no existe
            this.favoritos = datosLocal;
        }
    },
    methods: {
        traerData(url) {
            fetch(url)
                .then((response) => response.json())
                .then((info) => {
                    this.datosSprays = info.data
                    this.datosSpraysBK = info.data
                })
        },
        agregarFavorito(info) {
            if (!this.favoritos.some(fav => fav.uuid === info.uuid)) {
                this.favoritos.push(info);
                localStorage.setItem('favoritosSprays', JSON.stringify(this.favoritos));
            }
        },
        quitarFavorito(info) {
            const index = this.favoritos.findIndex(fav => fav.uuid === info.uuid);
            if (index !== -1) {
                this.favoritos.splice(index, 1);
                localStorage.setItem('favoritosSprays', JSON.stringify(this.favoritos));
            }
        },
        toggleFavorito(info) {
            if (this.isFavorito(info)) {
                this.quitarFavorito(info);
            } else {
                this.agregarFavorito(info);
            }
        },
        isFavorito(info) {
            return this.favoritos.some(fav => fav.uuid === info.uuid);
        },
        cambiarOrden(nuevoOrden) {
            this.activeSwitch = nuevoOrden;
        }
    },
    computed: {
        superFiltro() {
            let primerFiltro = this.datosSpraysBK.filter((e) =>
                e.displayName.toLowerCase().includes(this.textoBuscar.toLowerCase())
            )

            this.datosSprays = primerFiltro

            let filtroCheck = primerFiltro.slice().sort((a, b) => {
                if (this.activeSwitch === 'asc') {
                    return a.displayName.localeCompare(b.displayName)
                } else {
                    return b.displayName.localeCompare(a.displayName)
                }
            })

            this.datosSprays = filtroCheck
        },
    },
}).mount('#app')
