var express = require('express');
var router = express.Router();

var bmiController = require('../controllers/bmi_controller');

router.post('/', bmiController.hitungBMI)

module.exports = router;
