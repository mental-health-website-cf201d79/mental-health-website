new Chart(document.getElementById("prevalence-chart").getContext("2d"), {
    type: 'bar',
    data: {
        labels: ['Estimated','Overall','Female','Male','18-25','26-49','50+','Hispanic','White','Black or African American','Asian','NH/OPI','AI/AN','2 or More'],
        datasets: [{
            label: 'Mental Health Prevalence',
            data: [26,20.6,24.5,16.3,29.4,25.0,14.0,18.0,22.2,17.3,14.4,16.6,18.7,31.7],
            backgroundColor: [
                'rgb(255, 99, 132)'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true
    }
});
