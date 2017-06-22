var express = require('express')
var router = express.Router();
var Users = require('../controllers/user_controller')
var jwtHelper = require('../helper/jwt_validation')

router.post('/signup', Users.SignUp);
router.post('/signin', Users.SignIn);
router.post('/signinfacebook', Users.signinFacebook);

router.get('/validation',  Users.validation)

router.get('/',  jwtHelper.verifyToken, Users.findAllUsers)
router.get('/:id', jwtHelper.verifyToken, Users.findOneUser)
router.post('/', jwtHelper.verifyToken, Users.insertUser)
router.put('/:id', jwtHelper.verifyToken, Users.updateUser)
router.delete('/:id',  jwtHelper.verifyToken, Users.deleteUser)




module.exports = router
