document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/financial_data')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('financial-chart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.labels,
                    datasets: [
                        {
                            type: 'line',
                            label: 'Stock Price',
                            data: data.price,
                            borderColor: 'rgba(255, 99, 132, 1)',
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            fill: true,
                            yAxisID: 'y'
                        },
                        {
                            type: 'bar',
                            label: 'Trading Volume',
                            data: data.volume,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1,
                            yAxisID: 'y1'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            type: 'linear',
                            position: 'left',
                            beginAtZero: true
                        },
                        y1: {
                            type: 'linear',
                            position: 'right',
                            beginAtZero: true,
                            grid: {
                                drawOnChartArea: false
                            }
                        }
                    }
                }
            });
        });
});