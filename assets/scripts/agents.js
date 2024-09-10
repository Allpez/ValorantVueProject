let urlAgents = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true'

const { createApp } = Vue

const app = createApp({
    data() {
        return {
            agents: [],
            agentsBk: [],
            categories: [],
            favoritos: [],
            searchQuery: '',
            selectedRoles: [],
            
        }
    },
    created() {
        this.bringData(urlAgents)
        let datosLocal = JSON.parse(localStorage.getItem('favoritosAgent'))
        if (datosLocal) {
            this.favoritos = datosLocal
        }
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
        },
        agregarFavorito(agent){
            if (!this.favoritos.includes(agent)) {
                this.favoritos.push(agent)
                localStorage.setItem('favoritosAgent', JSON.stringify(this.favoritos))
            }
             
            
        },
        quitarFavoritos(agent) {
            const index = this.favoritos.findIndex(age => age.id === agent.id)
            if (index !== -1) {
                this.favoritos.splice(index, 1)
                localStorage.setItem('favoritosAgent', JSON.stringify(this.favoritos))
            }
        },
    },
    computed: {
        superFiltro() {
            let primerFiltro = this.agentsBk.filter((e) => e.displayName.toLowerCase().includes(this.searchQuery.toLowerCase()))
            if (this.selectedRoles.length > 0) {
                this.agents = primerFiltro.filter(e => this.selectedRoles.includes(e.role.displayName))
            } else {
            this.agents = primerFiltro
        }
    },
    
}

}).mount('#app')    