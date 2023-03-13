const express = require("express");
const getPostControllers = require("../controllers/post");
const validator = require("../helpers/validator");

const router = express.Router();

router.get("/", getPostControllers.getPosts);
router.post(
  "/post",
  validator.createPostValidator,
  getPostControllers.createPosts
);

module.exports = router;
