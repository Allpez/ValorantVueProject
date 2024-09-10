let urlAgents = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true'

const { createApp } = Vue

const app = createApp({
    data() {
        return {
            agents: [],
            agentsBk: [],
            categories: [],
            // favoritos: [],
            searchQuery: '',
            selectedRoles: [],
            
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
                    this.agentsBk = d.data
                    this.extractCategories()
                    console.log(this.agents)
                })
        },
        extractCategories() {
            const roles = this.agents.map(agent => agent.role ? agent.role.displayName : 'No role available');
            this.categories = [...new Set(roles)];
            console.log(this.categories);
            
        }

    },
    computed: {
        superFiltro() {
            let primerFiltro = this.agentsBk.filter((e) =>
                e.displayName.toLowerCase().includes(this.searchQuery.toLowerCase())
            )

            this.agents = primerFiltro
        },
    },
}).mount('#app')