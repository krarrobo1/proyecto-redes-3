/*
 * Socket.io Client
 */

let socket = io();
let devices = {};

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

ocultar();

document.getElementById('ubuntu').addEventListener('click', () => {
    sendInfoRequest('ubuntu');
});
document.getElementById('windows').addEventListener('click', () => {
    sendInfoRequest('windows');
});

// Event listeners...
socket.on('cpu', (data) => {
    console.log(data);

    //document.getElementById('valor').innerHTML = data.cpuUsagePercentage;
});

socket.on('memory', (data) => {
    console.log(data);

});




function sendInfoRequest(name) {
    mostrar();
    let req = {
        name
    };
    socket.emit('infoRequest', req, (response) => {
        console.log(response);
        devices[name] = response;
        elements(('<strong>SNMP SERVER'), response.sysDescr, response.sysUpTime, response.sysName, services, response.totalRam);
    });
}

function elements(titulo, des, time, name, services, memory) {
    document.getElementById("title").innerHTML = titulo;
    document.getElementById('description').innerHTML = des;
    document.getElementById('time').innerHTML = time;
    document.getElementById('name').innerHTML = name;
    document.getElementById('services').innerHTML = services;
    document.getElementById('memory').innerHTML = memory;
}

// Graficas


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
        }
    });
}


function ocultar() {
    document.getElementById('panel').style.display = 'none';
}

function mostrar() {
    document.getElementById('panel').style.display = 'block';
}