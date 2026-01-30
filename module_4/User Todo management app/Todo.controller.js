const supabase = require('../config/supabase');

exports.addTodo = async (req, res, next) => {
  try {
    const { title, description, userId } = req.body;

    if (!title || !userId)
      return res.status(400).json({ message: 'Title & userId required' });

    const { data, error } = await supabase
      .from('todos')
      .insert({
        title,
        description,
        user_id: userId,
      })
      .select()
      .single();

    if (error) throw error;

    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};
