const http = require('http');
const express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var cors = require('cors')

app.use(cors());

app.listen(3000, function() {
    console.log(`Server running at http://127.0.0.1:3000/`);
})

app.get('/', function(req, res){
    res.send('hi');
})

app.post('/', function(req,res){
    console.log(req.body);
    res.send();
})

