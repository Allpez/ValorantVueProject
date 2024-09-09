const urlApi = 'https://valorant-api.com/'
const urlAgent = `${urlApi}v1/agents`
const urlMaps = `${urlApi}v1/maps`
const urlPlayer = `${urlApi}v1/playercards`
const urlSpray = `${urlApi}v1/sprays`
const urlWeapon = `${urlApi}v1/weapons`

/*
fetch(urlAgent)
    .then((response) => response.json())
    .then((dataFinal) => {
        console.log(dataFinal.data)

        let aleatorio1 = dataFinal.data[Math.floor(Math.random() * dataFinal.data.length)]
        console.log(aleatorio1)
        let aleatorio2 = dataFinal.data[Math.floor(Math.random() * dataFinal.data.length)]
        console.log(aleatorio2)
        let aleatorio3 = dataFinal.data[Math.floor(Math.random() * dataFinal.data.length)]
        console.log(aleatorio3)
        let aleatorio4 = dataFinal.data[Math.floor(Math.random() * dataFinal.data.length)]
        console.log(aleatorio4)
        let aleatorio5 = dataFinal.data[Math.floor(Math.random() * dataFinal.data.length)]
        console.log(aleatorio5)

        let array = []

        array = array.concat(aleatorio1, aleatorio2, aleatorio3, aleatorio4, aleatorio5)
        console.log(array)
    })*/

const { createApp } = Vue //Estamos trayendo una función "createApp" que esta en el objeto VUE, variable global

//crear una app
const app = createApp({
    data() {
        //data va a retornar una info globalmente a la aplicacion, guardado de la info
        return {
            dataAgent: [],
            arrayAgent: [],

            dataMaps: [],
            arrayMaps: [],

            dataPlayer: [],
            arrayPlayer: [],

            dataSpray: [],
            arraySpray: [],

            dataWeapon: [],
            arrayWeapon: [],

            resultfiltroCategory: [],
        }
    },
    created() {
        //las cosas que se van a ejecutar la primera vez que se levante la pagina al inicio
        this.mostrarCarruselAgent(urlAgent)
        this.mostrarCarruselMaps(urlMaps)
        this.mostrarCarruselPlayer(urlPlayer)
        this.mostrarCarruselSpray(urlSpray)
        this.mostrarCarruselWeapon(urlWeapon)
    },
    methods: {
        //objeto con varias funciones o elementos, funciones moduladas
        mostrarCarruselAgent(url) {
            fetch(url)
                .then((response) => response.json())
                .then((info) => {
                    this.dataAgent = info.data

                    for (let i = 0; i < 4; i++) {
                        let aleatorio =
                            this.dataAgent[Math.floor(Math.random() * this.dataAgent.length)]

                        if (aleatorio.fullPortrait === null) {
                            i = i - 1
                        } else {
                            this.arrayAgent = this.arrayAgent.concat(aleatorio)

                            this.arrayAgent = this.arrayAgent.reduce((acc, item) => {
                                if (!acc.includes(item)) {
                                    acc.push(item)
                                } else {
                                    i = i - 1
                                }
                                return acc
                            }, [])
                        }
                    }
                    console.log(this.arrayAgent)
                })
        },
        mostrarCarruselPlayer(url) {
            fetch(url)
                .then((response) => response.json())
                .then((info) => {
                    this.dataPlayer = info.data

                    for (let i = 0; i < 4; i++) {
                        let aleatorio =
                            this.dataPlayer[Math.floor(Math.random() * this.dataPlayer.length)]

                        if (aleatorio.largeArt === null) {
                            i = i - 1
                        } else {
                            this.arrayPlayer = this.arrayPlayer.concat(aleatorio)

                            this.arrayPlayer = this.arrayPlayer.reduce((acc, item) => {
                                if (!acc.includes(item)) {
                                    acc.push(item)
                                } else {
                                    i = i - 1
                                }
                                return acc
                            }, [])
                        }
                    }
                    console.log(this.arrayPlayer)
                })
        },
        mostrarCarruselMaps(url) {
            fetch(url)
                .then((response) => response.json())
                .then((info) => {
                    this.dataMaps = info.data

                    for (let i = 0; i < 4; i++) {
                        let aleatorio =
                            this.dataMaps[Math.floor(Math.random() * this.dataMaps.length)]
                        if (aleatorio.listViewIconTall === null) {
                            i = i - 1
                        } else {
                            this.arrayMaps = this.arrayMaps.concat(aleatorio)

                            this.arrayMaps = this.arrayMaps.reduce((acc, item) => {
                                if (!acc.includes(item)) {
                                    acc.push(item)
                                } else {
                                    i = i - 1
                                }
                                return acc
                            }, [])
                        }
                    }
                    console.log(this.arrayMaps)
                })
        },
        mostrarCarruselSpray(url) {
            fetch(url)
                .then((response) => response.json())
                .then((info) => {
                    this.dataSpray = info.data

                    for (let i = 0; i < 4; i++) {
                        let aleatorio =
                            this.dataSpray[Math.floor(Math.random() * this.dataSpray.length)]
                        if (aleatorio.fullTransparentIcon === null) {
                            i = i - 1
                        } else {
                            this.arraySpray = this.arraySpray.concat(aleatorio)

                            this.arraySpray = this.arraySpray.reduce((acc, item) => {
                                if (!acc.includes(item)) {
                                    acc.push(item)
                                } else {
                                    i = i - 1
                                }
                                return acc
                            }, [])
                        }
                    }
                    console.log(this.arraySpray)
                })
        },
        mostrarCarruselWeapon(url) {
            fetch(url)
                .then((response) => response.json())
                .then((info) => {
                    this.dataWeapon = info.data

                    for (let i = 0; i < 3; i++) {
                        let aleatorio =
                            this.dataWeapon[Math.floor(Math.random() * this.dataWeapon.length)]
                        if (aleatorio.displayIcon === null) {
                            i = i - 1
                        } else {
                            this.arrayWeapon = this.arrayWeapon.concat(aleatorio)

                            this.arrayWeapon = this.arrayWeapon.reduce((acc, item) => {
                                if (!acc.includes(item)) {
                                    acc.push(item)
                                } else {
                                    i = i - 1
                                }
                                return acc
                            }, [])
                        }
                    }
                    console.log(this.arrayWeapon)
                })
        },
    },
}).mount('#app') //se creo la aplicacion vue que se va a montar en el contenedor app
