/*
 * Socket.io Client
 */
document.getElementById("panel").style.display = "none";

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


var data2 = [];
var data3 = [];
var num = 1;
var cjs = document.getElementById("chart1").getContext("2d");
var cjs2 = document.getElementById("chart2").getContext("2d");

socket.on('cpu', (data) => {
    console.log(data);
    data2.push(data.cpuUsagePercentage);
    data3.push(data2.length);
    document.getElementById('cpu').innerHTML = '<strong>CPU</strong>';
    graphState('Utilización - CPU %', data3, data2, cjs);
});

function memoriUbuntu() {
    socket.on('memory', (data) => {
        console.log(data);
        data2.push(data);
        data3.push(data2.length);
        document.getElementById('ram').innerHTML = '<strong>RAM<strong>';
        graphState('Utilización - Memoria %', data3, data2, cjs2);
    });
}

function sendInfoRequest(name) {
    document.getElementById("title").innerHTML = 'SNMP SERVER - ' + name.toUpperCase();
    mostrar('panel');
    let req = {
        name
    };
    socket.emit('infoRequest', req, async(response) => {
        console.log('Encrypted: ', response);
        let decrypted = crypt.decrypt(response);
        console.log("Decrypt: ", decrypted);
        devices[name] = decrypted;
        elements(response.sysDescr, response.sysUpTime, response.sysName, response.sysServices, response.totalRam);
    });
    if (name == 'ubuntu') {
        memoriUbuntu();
    } else {
        console.log('windows');
    }
}

function elements(des, time, name, services, memory) {
    document.getElementById('description').innerHTML = des;
    document.getElementById('time').innerHTML = getTime(time);
    document.getElementById('name').innerHTML = name;
    document.getElementById('services').innerHTML = services;
    document.getElementById('memory').innerHTML = memory;
}

// Grafica
function graphState(name, data3, data2, nameChart) {
    var stackedLine = new Chart(nameChart, {
        type: 'line',
        data: {
            labels: data3.map(item => item),
            datasets: [{
                label: name,
                borderColor: 'Green',
                //backgroundColor: 'White',
                hoverBorderColor: 'green',
                data: data2.map(item => item),
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    stacked: true
                }]
            },
            tooltips: {
                backgroundColor: '#0584f6'
            }
        }
    });
}

// Show panel
function mostrar(name) {
    document.getElementById(name).style.display = 'block';
}

// Time
function pad2(number) { number = '0' + number; return number.substr(number.length - 2); }

function getTime(tTime) {
    var seconds = tTime / 100;
    var hour = Math.floor(seconds / 3600);
    var minute = Math.floor((seconds / 60) % 60);
    var second = seconds % 60;
    var result = pad2(hour) + ':' + pad2(minute) + ':' + pad2(second);
    return result;
}