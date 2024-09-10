const urlPlayerCards = "https://valorant-api.com/v1/playercards";

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            playerCards: [], 
            playerCardsBK: [], 
            favorites: [], 
            searchText: "", 
            order: 'asc', 
            selectedCard: null 
        };
    },
    created() {
        this.fetchData(urlPlayerCards);
        let localData = JSON.parse(localStorage.getItem('favoritePlayerCards'));
        if (localData && Array.isArray(localData)) {
            this.favorites = localData;
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(info => {
                    this.playerCards = info.data;
                    this.playerCardsBK = [...info.data]; 
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        },
        addFavorite(card) {
            if (!this.favorites.some(fav => fav.uuid === card.uuid)) {
                this.favorites.push(card);
                localStorage.setItem('favoritePlayerCards', JSON.stringify(this.favorites));
            }
        },
        removeFavorite(card) {
            const index = this.favorites.findIndex(fav => fav.uuid === card.uuid);
            if (index !== -1) {
                this.favorites.splice(index, 1);
                localStorage.setItem('favoritePlayerCards', JSON.stringify(this.favorites));
            }
        },
        changeOrder(newOrder) {
            this.order = newOrder;
        },
        showDetails(card) {
            this.selectedCard = card; 
            const detailsModal = new bootstrap.Modal(document.getElementById('cardDetailsModal'));
            detailsModal.show(); 
        }
    },
    computed: {
        superFilter() {
            let filteredCards = this.playerCardsBK.filter(card =>
                card.displayName.toLowerCase().includes(this.searchText.toLowerCase())
            );

            return filteredCards.slice().sort((a, b) => {
                if (this.order === 'asc') {
                    return a.displayName.localeCompare(b.displayName);
                } else {
                    return b.displayName.localeCompare(a.displayName);
                }
            });
        }
    }
}).mount('#app');
