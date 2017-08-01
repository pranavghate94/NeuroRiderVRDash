const PORT_NUMBER = 8080;

var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app).listen(PORT_NUMBER,()=>{
    console.log("Express Server Started");
});
var io = require('socket.io')(server);

// Serve static bundle file(s)
app.use('/public',express.static(path.join(__dirname+'/src/client/public')));

// Serving the index.html file a.k.a. React Dashboard
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/src/client/index.html'));
});

io.sockets.on('connection',(client)=>{

    client.emit('getUnityData');

    client.on('unity::wake',(data)=>{
        console.log(data);
        client.broadcast.emit('draw::canvas',data);
    });

    client.on('unity::player_update',(data)=>{
        
        client.broadcast.emit('node::player_update',data)
    });

});
