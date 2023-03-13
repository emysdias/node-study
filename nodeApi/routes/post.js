const express = require("express");
const getPostControllers = require("../controllers/post");

const router = express.Router();

router.get("/", getPostControllers.getPosts);
router.post("/post", getPostControllers.createPosts);

module.exports = router;
