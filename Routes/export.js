var express = require('express');
var  app = express();
var router = express.Router();
var mongoose = require('mongoose');
var user;

var exportschema = require('../models/schemas.js');

var Model = mongoose.model("users");

 app.use('/schemas', exportschema);


  Model.find({}, function (err, resp){
 	     user = resp;
       console.log(resp);
      
    });

router.get('/', function(req, res) {
  res.send(user);
});


module.exports = router;











