const mongoose = require('mongoose');

// 定义评论的Schema
const commentSchema = new mongoose.Schema({
  country: String,
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// 创建并导出Comment模型
module.exports = mongoose.model('Comment', commentSchema); 