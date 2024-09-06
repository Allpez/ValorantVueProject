let urlMaps = "https://valorant-api.com/v1/maps";

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            maps: [], // Lista de mapas
            mapsBK: [], // Backup Lista de mapas
            favoritos: [], // Lista de mapas favoritos
            textoBuscar: "", // Texto de búsqueda
            orden: 'asc',  // Orden de los mapas, por defecto ascendente
        };
    },
    created() {
        this.traerData(urlMaps);
        let datosLocal = JSON.parse(localStorage.getItem('favoritosMaps'));
        if (datosLocal) {
            this.favoritos = datosLocal;
        }
    },
    methods: {
        traerData(url) {
            fetch(url)
                .then(response => response.json())
                .then(info => {
                    this.maps = info.data;
                    this.mapsBK = [...info.data];
                })
                .catch(error => {
                    console.error("Error al traer los datos:", error);
                });
        },
        agregarFavorito(map) {
            if (!this.favoritos.some(fav => fav.uuid === map.uuid)) {
                this.favoritos.push(map);
                localStorage.setItem('favoritosMaps', JSON.stringify(this.favoritos));
            }
        },
        quitarFavorito(map) {
            const index = this.favoritos.findIndex(fav => fav.uuid === map.uuid);
            if (index !== -1) {
                this.favoritos.splice(index, 1);
                localStorage.setItem('favoritosMaps', JSON.stringify(this.favoritos));
            }
        },
        cambiarOrden(nuevoOrden) {
            this.orden = nuevoOrden;
        }
    },
    computed: {
        superFiltro() {
            // Filtrar mapas basados en textoBuscar
            let primerFiltro = this.mapsBK.filter(map => 
                map.displayName.toLowerCase().includes(this.textoBuscar.toLowerCase())
            );
            
            // Ordenar mapas
            return primerFiltro.slice().sort((a, b) => {
                if (this.orden === 'asc') {
                    return a.displayName.localeCompare(b.displayName);
                } else {
                    return b.displayName.localeCompare(a.displayName);
                }
            });
        }
    }
}).mount('#app');
