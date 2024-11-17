const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// 添加用户评论
router.post('/', async (req, res) => {
  const { country, comment } = req.body;
  const newComment = new Comment({ country, comment });

  try {
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router; 