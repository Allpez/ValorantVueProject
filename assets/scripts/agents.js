console.log("hello");
let urlAgents = "https://valorant-api.com/v1/agents";

const {createApp} = Vue 

const app= createApp({
    data()
        {return{
            agents:[],
            agentsBk:[],
            categories: [],
            favoritos: [],
            cartegorySelected: [],
            serchCategory: ""
        }
            
        

    },
    created() {
        this.bringData(urlAgents);
        console.log(this.agents);
    },
    methods: {
        async bringData(url) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);

                this.agents = data.data;
                console.log(this.agents);

                this.agentsBk = [...data.data];

                this.categories = Array.from(new Set(this.agents.map((agent) => agent.role)));
                console.log(this.categories);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    },
    computed:{

    },
}).mount('#app')

