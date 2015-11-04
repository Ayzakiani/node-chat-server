var express = require('express');
var  app = express();
var router = express.Router();
var mongoose = require('mongoose');
var user;

var exportschema = require('../models/schemas.js');
 var Model = exportschema.Model;


 app.use('/schemas', exportschema);

  Model.find({}, function (err, resp){
  	console.log('Hi');
 	     user = resp;
       console.log(resp);
      
    });

router.get('/', function(req, res) {
  res.send(user);
    console.log('Hooo');
});


module.exports = router;












