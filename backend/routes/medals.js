const express = require('express');
const router = express.Router();
const Medal = require('../models/Medal');

// 获取所有奥运奖牌数据
router.get('/', async (req, res) => {
  try {
    const medals = await Medal.find();
    res.json(medals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 分页获取奥运奖牌数据
router.get('/:page/:pageSize', async (req, res) => {
  const { page, pageSize } = req.params;
  try {
    const medals = await Medal.find()
      .skip((page - 1) * pageSize)
      .limit(parseInt(pageSize));
    res.json(medals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 获取指定国家详细信息
router.get('/country/:country', async (req, res) => {
  const { country } = req.params;
  try {
    const medal = await Medal.findOne({ country });
    if (!medal) return res.status(404).json({ message: 'Country not found' });
    res.json(medal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; 