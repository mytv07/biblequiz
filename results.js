const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

router.post('/', async (req, res) => {
  const result = new Result(req.body);
  await result.save();
  res.send('Result saved');
});

router.get('/:userId', async (req, res) => {
  const results = await Result.find({ userId: req.params.userId });
  res.json(results);
});

module.exports = router;