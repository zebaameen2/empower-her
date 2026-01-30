const { body } = require('express-validator');

exports.signupValidation = [
  body('name').notEmpty().withMessage('Name required'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be 8 characters'),
];
