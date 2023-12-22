const express = require("express");
const feedController = require("../controllers/feed");
const router = express.router();

// GET /feed/posts
router.get("/posts", feedController.getPosts);

router.exports = router;
