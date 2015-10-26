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

var usrSchema = new mongoose.Schema({
     	usr: String 
});


var Chat = mongoose.model("Message" , msgSchema);

 var Model = mongoose.model("users" , usrSchema);

 app.use(express.static(__dirname + '/public'));
 io.sockets.on('connection', function(socket){
 console.log('working');
	 

	  socket.on('INSERT.USER' , function(data){
	  	
	 	 var newUser = new Model({usr:data});
	 	 Model.find({'usr':data}, function (err, resp){
	 	 	if (newUser === resp) {
	 	 			console.log('user exists already');
	 	 			$scope.errorMessage = 'That user name is already taken, try again!';
	 	 	} 

	 	 	else {

	 	 newUser.save(function(err){
	 		  if(err){
	 		  	console.log('error');
	 		  throw err;
	 		  }
	 	    else {
         io.sockets.emit('get usr' , data)
	 	     console.log('user saved to db');
	      }
	
	    })
	 	 }
	 	 //	console.log(resp);
	 	 });
	 	 	// if( Model.find({ usr: data })) {
	 	 	// 	console.log('error');
	 	  // 	return true;
	 	  //  	}
	 	  // 	else 
	 	  // 		{
	 	  // 			console.log('success');
	 	 	// 		false;
	 	 	// 	}
	 	  })





	 	 // if(chat.users.find() == newUser){
	 	 // 	console.log('error');
	 	 // 	return true;
	 	 // }
	 	 //  else {

	 	 // 	return false;

	 	 // newUser.save(function(err){
	 		//   if(err){
	 		//   	console.log('error');
	 		//   throw err;
	 		//   }
	 	 //    else {
    //      io.sockets.emit('get usr' , data)
	 	  
	   //    }
	
	   //  })
	 

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