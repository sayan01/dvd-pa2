document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/population_data')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('population-chart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.labels,
                    datasets: [
                        {
                            label: 'Current Population (%)',
                            data: data.current,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 5
                        },
                        {
                            label: 'Projected Population (%)',
                            data: data.projected,
                            backgroundColor: 'rgba(153, 102, 255, 0.2)',
                            borderColor: 'rgba(153, 102, 255, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });
});