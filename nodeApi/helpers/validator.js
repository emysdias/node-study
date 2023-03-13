const createPostValidator = (req, res, next) => {
  req.check("title", "Write a title").notEmpty();
  req.check("title", "Title must be 10 characters").isLength({ min: 10 });

  req.check("body", "Write a title").notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors.map((error) => error.msg);
    return res.status(400).json({ error: firstError });
  }
  next();
};

module.exports = { createPostValidator };
