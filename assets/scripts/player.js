let urlPlayerCards = "https://valorant-api.com/v1/playercards";

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            playerCards: [], // Lista de tarjetas de jugador
            playerCardsBK: [], // Backup Lista de tarjetas de jugador
            favoritos: [], // Lista de tarjetas favoritas
            textoBuscar: "", // Texto de búsqueda
            orden: 'asc',  // Orden de las tarjetas, por defecto ascendente
        };
    },
    created() {
        this.traerData(urlPlayerCards);
        let datosLocal = JSON.parse(localStorage.getItem('favoritosPlayerCards'));
        if (datosLocal && Array.isArray(datosLocal)) {
            this.favoritos = datosLocal;
        }
    },
    methods: {
        traerData(url) {
            fetch(url)
                .then(response => response.json())
                .then(info => {
                    this.playerCards = info.data; // Asignar la lista de tarjetas a this.playerCards
                    this.playerCardsBK = [...info.data]; // Crear una copia de los datos para los filtros y otras operaciones
                    console.log(this.playerCardsBK); // Mostrar los datos en la consola para verificar
                })
                .catch(error => {
                    console.error("Error al traer los datos:", error);
                });
        },
        agregarFavorito(card) {
            if (!this.favoritos.some(fav => fav.uuid === card.uuid)) {
                this.favoritos.push(card);
                localStorage.setItem('favoritosPlayerCards', JSON.stringify(this.favoritos));
            }
        },
        quitarFavorito(card) {
            const index = this.favoritos.findIndex(fav => fav.uuid === card.uuid);
            if (index !== -1) {
                this.favoritos.splice(index, 1);
                localStorage.setItem('favoritosPlayerCards', JSON.stringify(this.favoritos));
            }
        },
        cambiarOrden(nuevoOrden) {
            this.orden = nuevoOrden;
        }
    },
    computed: {
        superFiltro() {
            // Filtrar tarjetas basadas en textoBuscar
            let primerFiltro = this.playerCardsBK.filter(card => 
                card.displayName.toLowerCase().includes(this.textoBuscar.toLowerCase())
            );
            console.log(primerFiltro);
            
            // Ordenar tarjetas
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
