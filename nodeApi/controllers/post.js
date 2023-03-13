const Post = require("../models/post");

const getPosts = (req, res) => {
  Post.find()
    .select("_id title body")
    .then((posts) => {
      res.status(200).json({ posts: posts });
    })
    .catch((error) => console.log(error));
};

const createPosts = async (req, res) => {
  const post = new Post(req.body);
  try {
    await post.save();
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({
      message: "Erro no servidor",
    });
  }
};

module.exports = { getPosts, createPosts };
