const mongoose = require('mongoose');

// 定义奖牌数据的Schema
const medalSchema = new mongoose.Schema({
  country: String,
  gold: Number,
  silver: Number,
  bronze: Number,
  total: Number
});

// 创建并导出Medal模型
module.exports = mongoose.model('Medal', medalSchema); 