/*------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------- Logica de details.html -------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------*/

let url = new URLSearchParams(window.location.search)
let id = url.get('id')
console.log(id)

//  Importamos los datos de la url API
let urlAgents = 'https://valorant-api.com/v1/agents/'
let urlFinal = urlAgents + id
console.log(urlFinal)

//  API con la Información
fetch(urlFinal)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.data)
        let array = data.data

        let contenedor = document.getElementById('contenedorN')
        let tarjeta = document.createElement('div')
        tarjeta.className = 'tarjetaN'
        tarjeta.innerHTML = `
                                <div class="caja">
                                    <div class="row align-items-center">
                                        <div class="col-2 py-2 atras">
                                            <a href="../pages/agents.html">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"/>
                                            </svg>
                                            </a>
                                        </div>
                                        <div class="col-10 py-2">
                                            <h1>${
                                                array.displayName
                                            }</h1>
                                        </div>
                                    </div>
                                    <div class="col-12 bg-white rounded-3 p-5">
                                    <img src="${
                                        array.displayIcon
                                    }" class="img-detail p-2 rounded-3" alt="cinema" />
                                        <strong><p class="par">Description:</p></strong><p> ${array.description}</p>
                                        <strong><p class="par">DeveloperName:</p></strong><p> ${array.developerName}</p>
                                        <strong><p class="par">Role:</p></strong><p> ${array.role.displayName}</p>
                                        <strong><p class="par">Role Description:</p></strong><p> ${array.role.description}</p>
                                        <strong><p class="par">Abilities:</p></strong>
                                        <p> ${array.abilities[0].displayName}</p>
                                        <p> ${array.abilities[0].description}</p>
                                        <p> ${array.abilities[1].displayName}</p>
                                        <p> ${array.abilities[1].description}</p>
                                        <p> ${array.abilities[2].displayName}</p>
                                        <p> ${array.abilities[2].description}</p>
                                        <p> ${array.abilities[3].displayName}</p>
                                        <p> ${array.abilities[3].description}</p>
                                        <img class="img-details" src="${array.fullPortrait}"
                                    </div>
                                </div>    
        
        `

        contenedor.appendChild(tarjeta)
    })
    .catch((error) => console.error('Error al obtener los datos en details:', error))
