const express = require('express');
const mongoose = require('mongoose');
const app = express();

// 解析JSON请求体
app.use(express.json());

// 连接到MongoDB
mongoose.connect('mongodb://root:cjs9bfcc@test-db-mongodb.ns-redgu8yj.svc:27017')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// 使用路由
const medalsRouter = require('./routes/medals');
const commentsRouter = require('./routes/comments');

app.use('/api/medals', medalsRouter);
app.use('/api/comments', commentsRouter);

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 