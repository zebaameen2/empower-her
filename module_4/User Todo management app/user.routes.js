const router = require('express').Router();
const { signup } = require('../controllers/user.controller');
const { signupValidation } = require('../validations/user.validation');

router.post('/signup', signup);

module.exports = router;
