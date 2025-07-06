const mongoose = require('mongoose');

const quizHistorySchema = new mongoose.Schema({
  chapterId: String,
  score: Number,
  total: Number,
  date: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  totalPoints: { type: Number, default: 0 },
  quizHistory: [quizHistorySchema]
});

module.exports = mongoose.model('User', userSchema);