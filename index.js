var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  //res.sendFile(__dirname + '/map.html');
});
app.get('/drone', function(req, res){
  res.sendFile(__dirname + '/drone.html');
  //res.sendFile(__dirname + '/map.html');
});
app.get('/quad-icon', function(req, res){
  res.sendFile(__dirname + '/copter.png');
  //res.sendFile(__dirname + '/map.html');
});
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
