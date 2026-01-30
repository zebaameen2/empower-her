const supabase = require('../config/supabase');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

exports.signup = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from('users')
      .insert({ name, email, password: hashedPassword })
      .select()
      .single();

    if (error) {
      if (error.code === '23505')
        return res.status(409).json({ message: 'Email already exists' });
      throw error;
    }

    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};
