const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const quizRoutes = require('./routes/quizzes');
const resultRoutes = require('./routes/results');
const leaderboardRoutes = require('./routes/leaderboard');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

app.get('/', (req, res) => res.send('Telugu Bible Quiz API'));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log('MongoDB connected')
);

app.listen(5000, () => console.log('Server running on port 5000'));