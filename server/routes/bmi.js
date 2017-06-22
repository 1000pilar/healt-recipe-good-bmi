var express = require('express')
var router = express.Router()
var bmiController = require('../controllers/bmi-cont.js')


router.post('/', bmiController.bmi)



module.exports = router
