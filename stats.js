let prevalenceChart = new Chart(document.getElementById("prevalence-chart").getContext("2d"), {
    type: 'bar',
    data: {
        labels: ['Estimated','Overall','Female','Male','18-25','26-49','50+','Hispanic or Latino','White','Black or African American','Asian','NH/OPI','AI/AN','2 or More'],
        datasets: [{
            label: 'Affected by Mental Health Illness',
            data: [26,20.6,24.5,16.3,29.4,25.0,14.0,18.0,22.2,17.3,14.4,16.6,18.7,31.7],
            backgroundColor: [
                '#6B88D1','#6B88D1',
                '#939DB8','#939DB8',
                '#6A7285','#6A7285','#6A7285',
                '#8395C0','#8395C0','#8395C0','#8395C0','#8395C0','#8395C0','#8395C0'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                title: {
                    display: true,
                    text: '% of Population'
                }
            }
        }
    }
});

let recievedCareChart = new Chart(document.getElementById("recieved-care-chart").getContext("2d"), {
    type: 'bar',
    data: {
        labels: ['Overall','Female','Male','18-25','26-49','50+','Hispanic or Latino','White','Black or African American','Asian','2 or More'],
        datasets: [{
            label: 'Recieved Care in Past Year',
            data: [44.8,49.7,36.8,38.9,45.4,47.2,33.9,50.3,32.9,23.3,43.0],
            backgroundColor: [
                '#6B88D1',
                '#939DB8','#939DB8',
                '#6A7285','#6A7285','#6A7285',
                '#8395C0','#8395C0','#8395C0','#8395C0','#8395C0','#8395C0','#8395C0'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                title: {
                    display: true,
                    text: '% of Population with Condition'
                }
            }
        }
    }
});

let symptomsAnxietyDepression = new Chart(document.getElementById("symptoms-anxiety-depression").getContext("2d"), {
    type: 'bar',
    data: {
        labels: ['Total','18-29','30-39','40-49','50-59','60-69','70-79','80','Male','Female','Hispanic or Latino','White','Black','Asian','Other/Multiple Races'],
        datasets: [{
            label: 'Aug 19-31, 2020',
            data: [36.4,49.0,42.5,37.6,34.9,29.3,23.2,19.4,31.8,40.7,40.2,35.4,37.7,30.5,43.1],
            backgroundColor: [
                '#6B88D1'],
            hoverOffset: 4
        },
        {
            label: 'Jan 20-Feb 1, 2021',
            data: [41.5,57.0,45.9,41.1,41.2,33.4,26.3,22.5,38.0,44.8,47.1,39.8,44.5,37.4,44.8],
            backgroundColor: [
                '#6A7285'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                title: {
                    display: true,
                    text: '% of Population'
                }
            }
        }
    }
});

let suicideRates = new Chart(document.getElementById("suicide-rates").getContext("2d"), {
    type: 'line',
    data: {
        labels: [1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014],
        datasets: [{
            label: 'Female',
            data: [4.0,4.0,4.1,4.2,4.2,4.5,4.4,4.5,4.6,4.8,4.9,5.0,5.2,5.4,5.5,5.8],
            backgroundColor: [
                '#6B88D1'],
            hoverOffset: 4
        },
        {
            label: 'Male',
            data: [17.8,17.7,18.2,18.5,18.1,18.1,18.1,18.1,18.5,19.0,19.2,19.8,20.0,20.4,20.3,20.7],
            backgroundColor: [
                '#6A7285'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero:true,
                title: {
                    display: true,
                    text: 'Rate per 100,000 people'
                }
            }
        }
    }
});

let adhdPrevalence = new Chart(document.getElementById("adhd-prevalence").getContext("2d"), {
    type: 'bar',
    data: {
        labels: ['Overall','Female','Male','Hispanic','White','Black','Other'],
        datasets: [{
            label: 'Adolescents (13-18)',
            data: [8.7,4.2,13.0,8.5,8.9,9.3,5.6],
            backgroundColor: [
                '#6B88D1'],
            hoverOffset: 4
        },
        {
            label: 'Adults',
            data: [4.4,3.2,5.4,2.1,5.4,1.9,3.6],
            backgroundColor: [
                '#6A7285'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                title: {
                    display: true,
                    text: '% of Population'
                }
            }
        }
    }
});

let ptsdChart = new Chart(document.getElementById("ptsd-prevalence").getContext("2d"), {
    type: 'bar',
    data: {
        labels: ['Overall','Female','Male','18-29','30-44','45-59','60+'],
        datasets: [{
            label: 'Adults With PTSD',
            data: [3.6,5.2,1.8,4.0,3.5,5.3,1.0],
            backgroundColor: [
                '#6B88D1',
                '#939DB8','#939DB8',
                '#6A7285','#6A7285','#6A7285','#6A7285'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                title: {
                    display: true,
                    text: '% of Population'
                }
            }
        }
    }
});