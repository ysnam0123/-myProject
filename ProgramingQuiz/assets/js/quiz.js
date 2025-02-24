const nameInput = document.getElementById('nameInput');
const quizStart = document.querySelector('.quizStart');
const userName = document.querySelector('.userName');
const user = document.querySelector('.user');
const startPage = document.querySelector('#startPage');
const question1 = document.querySelector('.question1');
const question2 = document.querySelector('.question2');
const question3 = document.querySelector('.question3');
const question4 = document.querySelector('.question4');
const question5 = document.querySelector('.question5');
const question6 = document.querySelector('.question6');
const question7 = document.querySelector('.question7');
const question8 = document.querySelector('.question8');
const question9 = document.querySelector('.question9');
const question10 = document.querySelector('.question10');

quizStart.addEventListener('click', () => {
  if (nameInput.value.trim()) {
    userName.innerHTML = nameInput.value;
    user.classList.remove('inactive');
    startPage.classList.add('inactive');
    question1.classList.remove('inactive');
  } else {
    const inputAlert = document.querySelector('.inputAlert');
    inputAlert.classList.remove('inactive');
    nameInput.focus();
    setTimeout(() => {
      inputAlert.classList.add('inactive');
    }, 2000);
  }
});

let score = 0;
const correctAnswer = document.querySelectorAll('.correct');
const lastAnswer = document.querySelector('.lastAnswer');
const resultPage = document.querySelector('.resultPage');
const userScore = document.querySelector('.userScore');

correctAnswer.forEach((button) => {
  button.addEventListener('click', () => {
    score += 10;
    console.log('right! 10 score ++');
  });
});

lastAnswer.addEventListener('click', () => {
  if (score < 40) {
    userScore.textContent = score + ' 😡';
  } else if (score < 70) {
    userScore.textContent = score + ' 🙂';
  } else {
    userScore.textContent = score + ' 🥰';
  }

  resultPage.classList.remove('inactive');
});

const questions = document.querySelectorAll('.questionBox'); // 모든 문제를 배열로 가져옴
const answerButtons = document.querySelectorAll('.answer'); // 모든 답변 버튼 가져옴

answerButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // 현재 보여지는 문제 찾기
    let currentQuestion = document.querySelector('.questionBox:not(.inactive)');
    let nextQuestion = currentQuestion.nextElementSibling; // 다음 문제 찾기

    if (nextQuestion && nextQuestion.classList.contains('questionBox')) {
      currentQuestion.classList.add('inactive'); // 현재 문제 숨기기
      nextQuestion.classList.remove('inactive'); // 다음 문제 보이기
    } else {
      // 다음 문제가 없으면 결과 페이지로 이동
      document.querySelector('.resultPage').classList.remove('inactive');
    }
  });
});
