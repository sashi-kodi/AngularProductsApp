var express = require('express');
var bodyParser = require('body-parser');
var products = require('./products.json');

var cors = require('cors');


var app= express();
app.use(cors());
app.use(bodyParser.json());
app.get('/products', function(req,res,next){
    console.log(products);
    res.send(products);
});
app.listen(3000, function(){
    console.log('express is listening on port 3000');
});