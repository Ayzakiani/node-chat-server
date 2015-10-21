var express = require('express'), 
app = express(),
mongoose = require ('mongoose'),
server = require('http').createServer(app),
io = require('socket.io').listen(server);

server.listen(3000);
mongoose.connect ('mongodb://localhost/chat', function(err){
	if (err){
		console.log (err);
	} else {
		console.log('connected to mongodb');
	}

})

var msgSchema = new mongoose.Schema({
	msg: String,
	time: {type:Date , default : Date.now}

});
var userSchema = new mongoose.Schema({
	id: int,
	userName: String,

});
var Chat = mongoose.model("Message" , msgSchema);
var Chat = mongoose.model("User" , msgSchema);

app.use(express.static(__dirname + '/public'));
io.sockets.on('connection', function(socket){
 console.log('working');
	 

	 socket.on('new usr' , function(data){
	 	io.sockets.emit('get usr' , data)
	 	console.log('data');
	 });



	 socket.on ('send msg' , function(data){
	 	var newMsg = new Chat({msg:data});
	 	newMsg.save(function(err){
	 		if(err){
	 		  throw err;
	 		}
	 	    else {
	 	io.sockets.emit('get msg' , data)
	 	console.log('msg is being sent');
	 }
  
         })
	 })
});


	 //  socket.on('new user' , function(data , callback){
	 //  		 	console.log (data);
	 // 	if (users.indexOf(data) != -1 ){
	 // 		callback(false);
	 // 	} else {
	 // 		callback (true);
	 // 		socket.user.text = data;
	 // 		users.push(	socket.user.text );
	 //    io.sockets.emit('usernames', users);			
	 // 	}

	 // });

 // socket.on('new user' , function(data , callback){
	//  	if (UserNames.indexOf(data) != -1 ){
	//  		 callback(false);
	//  	 } else {
	//  		 callback (true);	 		 
	//      socket.nickname = data;
	//      console.log("socket.nickname");
	//    	 UserNames.push(socket.nickname);
	//      io.sockets.emit('usernames', UserNames);			
	//  	}
 //  });