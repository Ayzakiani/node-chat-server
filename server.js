var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);
    var router = express.Router(); 
    var exportss = require('./Routes/export');
    var exportschema = require('./models/schemas.js');

server.listen(3000);

mongoose.connect('mongodb://localhost/chat', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('connected to mongodb');
    }

})

app.use('/schemas', exportschema);

app.use('/export', exportss);

 // var Chat = mongoose.model("Message", msgSchema);

 var Model = mongoose.model("users");


app.use(express.static(__dirname + '/public'));
io.sockets.on('connection', function(socket) {
    console.log('working');


    socket.on('INSERT.USER', function(data) {
        console.log("ahah");

        var newUser = new Model({ usr: data});
        console.log(data);
        Model.count({'usr': data }, function(err, resp, req) {
            if (resp) {
                console.log('user exists already');
                var data = 'This User name has already been taken try again!';
                io.sockets.emit('signup.error', data)
            } else {

                newUser.save(function(err) {
                    if (err) {
                        console.log('error');
                        throw err;
                    } else {
         
                        console.log('user saved to db');
                    }

                })
            }
        });

    })


    socket.on('send msg', function(data) {
        var newMsg = new Chat({
            msg: data
        });

     newMsg.save(function(err) {
       if (err) {
        throw err;
        } else {
         io.sockets.emit('get msg', data)
         console.log('msg is being sent');
        }

     })
})

  


});

