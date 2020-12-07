/*
 * Socket.io Client
 */

let socket = io();

let devices = {};

socket.on('connect', function() {
    console.log('Conectado al servidor');
});


document.getElementById('ubuntu').addEventListener('click', () => {
    sendInfoRequest('ubuntu');
});
document.getElementById('windows').addEventListener('click', () => {
    sendInfoRequest('windows');
});

// Event listeners...
socket.on('cpu', (data) => {
    console.log(data);
});

socket.on('memory', (data) => {
    console.log(data);
});




function sendInfoRequest(name) {
    let req = {
        name
    };
    socket.emit('infoRequest', req, (response) => {
        console.log(response);
        devices[name] = response;
    });
}

// Graficas
document.getElementById("title").innerHTML = ('<strong>SNMP SERVER - WINDOWS</strong>');

var cjs = document.getElementById("chart1").getContext("2d");
var cjs2 = document.getElementById("chart2").getContext("2d");

var salidas = [125, 132, 156, 145];
var names = ['ram', 'procesador', 'procesos', 'memoria'];

graphState('Ram', cjs);
graphState('Procesador', cjs2);

function graphState(name, nameChart) {
    var stackedLine = new Chart(nameChart, {
        type: 'line',
        data: {
            labels: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
            datasets: [{
                label: name,
                data: [100, 9, 15, 11, 10, 16, 8, 7, 14, 1, 9, 15, 2, 14, 3, 19, 1, 20],
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    stacked: true
                }]
            },
            //borderColor: { Color: 'rgba(244, 244, 244, 1)' },

        }
    });
}