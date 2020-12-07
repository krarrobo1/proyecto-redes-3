const { io } = require('../app');
const SessionManager = require('./SessionManager');

io.on('connection', (client) => {
    console.log('A client has connected', client.id);

    client.on('infoRequest', (data, cb) => {
        // Socket join client into room...
        client.join(data.name);
        SessionManager.getClientData(data.name, cb);
    })
})