var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket){
  console.log('a user connected');
  app.get('/price/:code', function(req, res){
  		socket.emit('price',req.params.code)
		res.json({success:"ok"})
  });
  socket.on('price',function(msg){
  	 console.log("MSG",msg)
  })

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
