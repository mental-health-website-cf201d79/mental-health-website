new Chart(document.getElementById("asd-prevalence").getContext("2d"), {
    type: 'doughnut',
    data: {
        labels: ['Other','Autism'],
        datasets: [{
            label: 'Autism Prevalence',
            labels: ['Other','Autism'],
            data: [54, 1],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true
    }
});

new Chart(document.getElementById("asd-prevalence2").getContext("2d"), {
    type: 'doughnut',
    data: {
        labels: ['Other','Autism'],
        datasets: [{
            label: 'Autism Prevalence',
            labels: ['Other','Autism'],
            data: [54, 1],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'],
            hoverOffset: 4
        }]
    }
});
