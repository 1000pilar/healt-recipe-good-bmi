var express = require('express')
var router = express.Router()
var foodController = require('../controllers/food-cont.js')


router.post('/', foodController.food)



module.exports = router
