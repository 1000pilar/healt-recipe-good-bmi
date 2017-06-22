const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

// var db_config = {
//      development : 'mongodb://localhost/bodymass'
//      // test :  'mongodb://localhost/bodymass-test'
// }

mongoose.connect('mongodb://localhost/bodymass', ()=>{
     console.log('connect to Database');
});

// var app_env = app.settings.env

mongoose.Promise = require('bluebird')

// mongoose.connect(db_config[app_env], function(){
//      console.log('connect to db bodymass' + db_config[app_env]);
// })

var app = express();

var apibmi = require('./router/bmi')
var users = require('./router/users');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))

app.use('/apibmi', apibmi)
app.use('/api/users', users)

app.listen(3000, ()=>{
     console.log('connected');
})

module.exports = app;
