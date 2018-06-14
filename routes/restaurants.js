var express = require('express');
var router = express.Router();

var dataJson = require('../data/establishment-data');


router.get('/', function(req, res, next){
    res.status(200).json({
        message: 'Success',
        obj: dataJson
    });
});



module.exports = router;