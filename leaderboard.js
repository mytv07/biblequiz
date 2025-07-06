const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

router.get('/global', async (req, res) => {
  const top = await Result.find().sort({ score: -1 }).limit(10);
  res.json(top);
});

router.get('/:chapterId', async (req, res) => {
  const top = await Result.find({ chapterId: req.params.chapterId }).sort({ score: -1 }).limit(10);
  res.json(top);
});

module.exports = router;