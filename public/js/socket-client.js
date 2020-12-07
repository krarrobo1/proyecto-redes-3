/*
 * Socket.io Client
 */

let socket = io();

let devices = {};

socket.on('connect', function() {
    console.log('Conectado al servidor');
});


document.getElementById('ubuntu').addEventListener('click', () => {
    sendInfoRequest('ubuntu')
});
document.getElementById('windows').addEventListener('click', () => {
    sendInfoRequest('windows')
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