let url = "https://valorant-api.com/"

const {createApp} = Vue

const app = createApp({
    data(){
        return{
            weapons:[],
            categorys:[],
            cartegorySelected:[],
            serchCategory:""
        }
    },
    created(){

    },
    methods:{
        getData(url){
            fetch(url).then(res=>res.json()).then(data =>{
                this.weapons = data.weapons
            })
        }
    },
    computed:{

    }

}).mount('#app')