
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const questions = [
  {
    question: "What does HTML stand for?",
    choices: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperloop Machine Language", "None of these"],
    answer: 0
  },
  {
    question: "Which language runs in a web browser?",
    choices: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "What does CSS stand for?",
    choices: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
    answer: 0
  }
];

app.get('/api/questions', (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
