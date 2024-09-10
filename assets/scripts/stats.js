document.addEventListener('DOMContentLoaded', () => {
    let urlAgents = 'https://valorant-api.com/v1/agents';

    fetch(urlAgents)
        .then(response => response.json())
        .then(data => {
            if (data && data.data) {
                let roleCounts = {
                    'Initiator': 0,
                    'Sentinel': 0,
                    'Duelist': 0,
                    'Controller': 0
                };

                data.data.forEach(agent => {
                    let roleName = agent.role && agent.role.displayName;

                    if (roleName && roleCounts.hasOwnProperty(roleName)) {
                        roleCounts[roleName]++;
                    }
                });

                let ctx = document.getElementById('statsAgents').getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Initiator', 'Sentinel', 'Duelist', 'Controller'],
                        datasets: [{
                            label: 'Agents Numbers',
                            data: [
                                roleCounts['Initiator'] || 0,
                                roleCounts['Sentinel'] || 0,
                                roleCounts['Duelist'] || 0,
                                roleCounts['Controller'] || 0
                            ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }
        })
        .catch(error => console.error("Error al obtener los datos:", error));
});
