
let currentQuestion = 0;
let score = 0;
let questions = [];

fetch('http://localhost:3000/api/questions')
  .then(response => response.json())
  .then(data => {
    questions = data;
    showQuestion();
  });

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById('quiz').innerHTML = '<h2>Quiz Complete</h2>';
    document.getElementById('score').innerText = `Your score: ${score}/${questions.length}`;
    return;
  }

  const questionObj = questions[currentQuestion];
  const quizDiv = document.getElementById('quiz');
  quizDiv.innerHTML = `<div class='question'><strong>${questionObj.question}</strong></div>`;

  const choicesDiv = document.createElement('div');
  choicesDiv.classList.add('choices');

  questionObj.choices.forEach((choice, index) => {
    const btn = document.createElement('button');
    btn.innerText = choice;
    btn.onclick = () => {
      if (index === questionObj.answer) score++;
      currentQuestion++;
      showQuestion();
    };
    choicesDiv.appendChild(btn);
  });

  quizDiv.appendChild(choicesDiv);
}
