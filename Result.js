const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  chapterId: String,
  score: Number,
  duration: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Result', resultSchema);