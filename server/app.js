const express = require('express')
    , bodyParser = require('body-parser')
    , passport = require('passport')
    , LocalStrategy = require('passport-local')
    , bcrypt = require('bcrypt')
    , cors = require('cors')
    , mongoose = require('mongoose')
    , users = require('./routes/users.js')
    , bmi = require('./routes/bmi.js')
    , foods = require('./routes/foods.js')
    , User = require('./models/user.js')

const app = express()

app.use(cors())
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/bmi-health', ()=>{
  console.log(`run in environment database mongodb!!`);
})

passport.use(new LocalStrategy(
  function (username, password, done){
    User.findOne({username: username}, function(err, user){
      if (err) { return done(err); }
      if (!user) { return done(null, {message: `username or password invalid`}); }
      if (!bcrypt.compareSync(password, user.password)) { return done(null, {message: `password invalid`}); }
      return done(null, user);
    })
  }
))




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/users', users)
app.use('/bmi', bmi)
app.use('/foods', foods)

app.listen(3000, ()=>{
  console.log(`Connect to port 3000`);
})
