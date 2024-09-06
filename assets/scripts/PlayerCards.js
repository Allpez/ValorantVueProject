const apiUrl = 'https://valorant-api.com/v1/agents';

// Función para obtener datos de la API
function fetchPlayers() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      
      const players = data.data;

      // Selecciona el contenedor de las tarjetas
      const playerContainer = document.getElementById('player-container');

      // Limpia el contenedor 
      playerContainer.innerHTML = '';

      players.forEach(player => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');
        card.innerHTML = `
          <div class="card">
            <img src="${player.fullPortrait}" class="card-img-top" alt="${player.displayName}">
            <div class="card-body">
              <h5 class="card-title">${player.displayName}</h5>
              <p class="card-text">Role: ${player.role.displayName}</p>
              <p class="card-text">Description: ${player.description}</p>
              <button class="btn btn-primary">View Details</button>
            </div>
          </div>
        `;
        playerContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching players:', error);
    });
}


fetchPlayers();
