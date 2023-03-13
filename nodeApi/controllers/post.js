const Post = require("../models/post");

const getPosts = (req, res) => {
  res.json({ teste: "teste" });
};

const createPosts = async (req, res) => {
  const post = new Post(req.body);
  try {
    await post.save();
    return res.status(200).json(post);
  } catch (error) {
    return res.status(400).json({
      message: `${error}`,
    });
  }
};

module.exports = { getPosts, createPosts };
