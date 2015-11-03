var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schemma = mongoose.schema;


var msgSchema = new mongoose.Schema({
    msg: String,
    time: {
        type: Date,
        default: Date.now
    }
});



var usrSchema = new mongoose.Schema({
    usr: String
 });

router.Model = mongoose.model("users", usrSchema);
router.Chat = mongoose.model("Message", msgSchema);

module.exports = router;