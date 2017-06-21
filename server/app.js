var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var app = express();

var apibmi = require('./routes/bmi')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))

app.use('/apibmi', apibmi)

app.listen(3000, ()=>{
     console.log('connected');
})
