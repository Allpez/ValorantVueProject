console.log("hello");
let urlAgents = "https://valorant-api.com/v1/agents";

const {createApp} = vue 

const app= createApp({
    data()
        {return{
            agents:[],
            roles:{},
            rolesSelected:[],
            textSearch:""
        }

    },
    created(){


    },
    methods:{
        bringData(url){
            fetch(url).then(response => response.json()).then(data =>{
                this.agents = data.
            })
        }

    },
    computed:{

    },
}).mount('#app')

