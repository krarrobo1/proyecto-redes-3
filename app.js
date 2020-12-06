const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Serving static files
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


module.exports = { http, io };