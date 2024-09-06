let urlValorant = "https://valorant-api.com/v1/weapons"

const { createApp } = Vue

const app = createApp({
    data() {
        return {
            weapons: [],
            weaponsBK: [],
            categories: [],
            favoritos: [],
            cartegorySelected: [],
            serchCategory: ""
        }
    },
    created() {
        this.getData(urlValorant)
        this.loadFavoritos();
    },
    methods: {
        getData(url) {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.weapons = data.data
                this.weaponsBK = data.data
                this.categories = Array.from(new Set(this.weapons.map((weapon) => weapon.category)))
               
            })
        },
        loadFavoritos() {
            const favoritosStored = JSON.parse(localStorage.getItem('favoritosWeapons'));
            if (favoritosStored) {
                this.favoritos = favoritosStored;
            }
        },
        cleanCategoryName(category) {
            return category.replace('EEquippableCategory::', '');
        },
        agregarFavorito(weapon) {
            if (!this.favoritos.some(fav => fav.uuid === weapon.uuid)) {
                this.favoritos.push(weapon);
                localStorage.setItem('favoritosWeapons', JSON.stringify(this.favoritos));
                console.log(this.favoritos);
                
            }
        },
        quitarFavorito(weapon) {
            const index = this.favoritos.findIndex(fav => fav.uuid === weapon.uuid);
            if (index !== -1) {
                this.favoritos.splice(index, 1);
                localStorage.setItem('favoritosWeapons', JSON.stringify(this.favoritos));
            }
        },
       
    },
    computed: {
        allfilter() {
            let filterSerch = this.weaponsBK.filter(weapon => weapon.displayName.toLowerCase().includes(this.serchCategory.toLowerCase()))
            if (this.cartegorySelected.length > 0) {
                this.weapons = filterSerch.filter(weapon => this.cartegorySelected.includes(weapon.category))
            } else{
                this.weapons = filterSerch
            }
        }
    }

}).mount('#app')