const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.get('/:chapterId', async (req, res) => {
  const questions = await Question.find({ chapterId: req.params.chapterId });
  res.json(questions);
});

module.exports = router;