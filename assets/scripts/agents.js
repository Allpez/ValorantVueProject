
let urlAgents = 'https://valorant-api.com/v1/agents'

const { createApp } = Vue

const app = createApp({
    data() {
        return {
            agents: [],
            agentsBk: [],
            categories: [],
            favoritos: [],
            cartegorySelected: [],
            serchCategory: '',
        }
    },
    created() {
        this.bringData(urlAgents)
    },
    methods: {
        bringData(url) {
            fetch(url)
                .then((response) => response.json())
                .then((d) => {
                    this.agents = d.data
                    console.log(this.agents)
                })
        },
    },
    computed: {},
}).mount('#app')
