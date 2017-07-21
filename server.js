var express = require('express');
var app = express();
var path = require('path');

const PORT_NUMBER = 8080;

// Serve static bundle file(s)
app.use('/public',express.static(path.join(__dirname+'/src/client/public')));

// Serving the index.html file a.k.a. React Dashboard
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/src/client/index.html'));
});

var server = app.listen(PORT_NUMBER,()=>{
    console.log("Express Listening on port: " + PORT_NUMBER);
});
