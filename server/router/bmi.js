var express = require('express');
var router = express.Router();

var bmiController = require('../controllers/bmi_controller');

router.post('/', bmiController.hitungBMI)
router.post('/food', bmiController.food)

module.exports = router;
