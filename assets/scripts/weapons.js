let urlValorant = "https://valorant-api.com/v1/weapons"

const { createApp } = Vue

const app = createApp({
    data() {
        return {
            weapons: [],
            weaponsBK:[],
            categories: [],
            cartegorySelected: [],
            serchCategory: ""
        }
    },
    created() {
        this.getData(urlValorant)


    },
    methods: {
        getData(url) {
            fetch(url).then(res => res.json()).then(data => {
                this.weapons = data.data
                this.weaponsBK = data.data
                this.categories = Array.from(new Set(this.weapons.map((weapon) => weapon.category)))
                console.log(this.categories);
            })
        },
        cleanCategoryName(category) {
            return category.replace('EEquippableCategory::', '');
        }
    },
    computed: {
        allfilter() {
            let filterSerch = this.weaponsBK.filter(weapon => weapon.displayName.toLowerCase().includes(this.serchCategory.toLowerCase()))
           console.log(this.weapons);
           
            this.weapons = filterSerch
            // let filterCheckbox = 
        }
    }

}).mount('#app')