//make socket connection

var socket = io.connect('http://192.168.43.246:8000');

//DOM Query

var message = document.querySelector("#message");
var handle = document.querySelector("#handle");
var send = document.querySelector("#send");
var output = document.querySelector("#output");
var feedback = document.querySelector("#feedback");

// Emit event

send.addEventListener("click", () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

message.addEventListener('input', () => {
    socket.emit('typing', handle.value);
});


//Listen socket

socket.on('chat', (data) => {
    message.value = "";
    feedback.innerHTML = "";
    output.innerHTML += `<p><strong>${data.handle} </strong> : ${data.message} </p>`;
});

socket.on('typing', (data) => {
    feedback.innerHTML = `<p><em> ${data} is typing a message ... </em></p>`;
});