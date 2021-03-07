


function getGraph(xdate, ytemp) {
    console.log(xdate, ytemp)

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xdate,

        datasets: [{
            label: '# of Votes',
            data: ytemp,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
              
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
        
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    },

    options: {
        scales: {
            x: [{
                type: 'time',
                time: {
                    unit: 'day'
                }
            }]
        }
    }
});
}