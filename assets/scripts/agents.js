console.log("hello");
let urlAgents = "https://valorant-api.com/v1/agents";

const {createApp} = Vue 

const app= createApp({
    data()
        {return{
            agents:[],
            agentsBk:[],
            roles:[],
            rolesSelected:[],
            textSearch:""
        }

    },
    created(){
        this.bringData(urlAgents)
        console.log(this.agents);
        


    },
    methods:{
        bringData(url){
            fetch(url).then(response => response.json()).then(data =>{
                console.log(data);
                
                this.agents = data.data; 
                console.log(this.agents);
                
                this.agentsBk =[...data.data];
                
                this.roles = Array.from(new Set(this.agents.map((agent) => agent.role)))
                console.log(this.roles);
                
                
            })
        }
        
    },
    computed:{

    },
}).mount('#app')

