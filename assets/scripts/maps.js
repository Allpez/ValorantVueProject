let urlMaps = "https://valorant-api.com/v1/maps";

const { createApp } = Vue; //Estamos trayendo una función "createApp" que esta en el objeto VUE, variable global

const app = createApp({
    data() { //data va a retornar una info globalmente a la aplicacion, guardado de la info
        return { //definicion de la variables, arreglos
            maps: [], // Lista de mapas
            mapsBK: [], // Backup Lista de mapas
            favoritos: [], // Lista de mapas favoritos
            textoBuscar: "", // Texto de búsqueda
            orden: 'asc',  // Orden de los mapas, por defecto ascendente
        };
    },
    created() { //las cosas que se van a ejecutar la primera vez que se levante la pagina al inicio
        this.traerData(urlMaps);
        let datosLocal = JSON.parse(localStorage.getItem('favoritosMaps'));
        if (datosLocal && Array.isArray(datosLocal)) { //es importante porque si no encuentra info se va a romper porque no existe
            this.favoritos = datosLocal;
        }
    },
    methods: { //objeto con varias funciones o elementos, funciones moduladas
        traerData(url) {
            fetch(url)
                .then(response => response.json()).then(info => {
                    this.maps = info.data; // Asignar la lista de mapas a this.maps
                    this.mapsBK = [...info.data]; // Crear una copia de los datos para los filtros y otras operaciones
                    console.log(this.maps); // Mostrar los datos en la consola para verificar
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
    computed: { //interacciones de la pagina o dependencias de eventos que se ejecutan directamente
        superFiltro() {
            // Filtrar mapas basados en textoBuscar
            let primerFiltro = this.mapsBK.filter(map => 
                map.displayName.toLowerCase().includes(this.textoBuscar.toLowerCase())
            );
            console.log(primerFiltro);
            
            
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
}).mount('#app'); //se creo la aplicacion vue que se va a montar en el contenedor app
