var app = require('./app');
var http = require('http');
var socket = require('socket.io');

var server = http.createServer(app);

var listen = server.listen(8000, () => {
    console.log("Server running");
});

var io = socket(listen);

io.on('connection', (socket) => {
    console.log("made socket connection");
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    });

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    });
})