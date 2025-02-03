const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const increaseHour = document.getElementById('increaseHour');
const increaseMinute = document.getElementById('increaseMinute');
const decreaseHour = document.getElementById('decreaseHour');
const decreaseMinute = document.getElementById('decreaseMinute');
let currentHour = parseInt(hour.textContent, 10);
let currentMinute = parseInt(minute.textContent, 10);
let currentSecond = parseInt(second.textContent, 10);

function increaseTime(type) {
  if (type === 'hour') {
    currentHour = (currentHour + 1) % 24;
    hour.textContent = String(currentHour).padStart(2, '0');
  } else if (type === 'minute') {
    currentMinute = (currentMinute + 1) % 60;
    minute.textContent = String(currentMinute).padStart(2, '0');
  }
}

let timer;
function startIncreasing(type) {
  timer = setInterval(() => {
    if (type === 'hour') {
      currentHour = (currentHour + 1) % 24;
      hour.textContent = String(currentHour).padStart(2, '0');
    } else if (type === 'minute' && currentMinute < 59) {
      currentMinute = (currentMinute + 1) % 60;
      minute.textContent = String(currentMinute).padStart(2, '0');
    }
  }, 90); // 0.2초마다 증가
}
// 꾹 누르기 멈추기
function stopIncreasing() {
  clearInterval(timer);
}
increaseHour.addEventListener('click', () => increaseTime('hour'));
increaseMinute.addEventListener('click', () => increaseTime('minute'));
increaseHour.addEventListener('mousedown', () => startIncreasing('hour'));
increaseMinute.addEventListener('mousedown', () => startIncreasing('minute'));

increaseHour.addEventListener('mouseup', stopIncreasing);
increaseMinute.addEventListener('mouseup', stopIncreasing);

increaseHour.addEventListener('mouseleave', stopIncreasing);
increaseMinute.addEventListener('mouseleave', stopIncreasing);

function decreaseTime(type) {
  if (type === 'hour') {
    currentHour = (currentHour - 1 + 24) % 24;
    hour.textContent = String(currentHour).padStart(2, '0');
  } else if (type === 'minute') {
    currentMinute = (currentMinute - 1 + 60) % 60;
    minute.textContent = String(currentMinute).padStart(2, '0');
  }
}
function startDecreasing(type) {
  timer = setInterval(() => {
    if (type === 'hour') {
      currentHour = (currentHour - 1 + 24) % 24;
      hour.textContent = String(currentHour).padStart(2, '0');
    } else if (type === 'minute') {
      currentMinute = (currentMinute - 1 + 60) % 60;
      minute.textContent = String(currentMinute).padStart(2, '0');
    }
  }, 90);
}
function stopDecreasing() {
  clearInterval(timer);
}

decreaseHour.addEventListener('click', () => decreaseTime('hour'));
decreaseMinute.addEventListener('click', () => decreaseTime('minute'));

decreaseHour.addEventListener('mousedown', () => startDecreasing('hour'));
decreaseMinute.addEventListener('mousedown', () => startDecreasing('minute'));

decreaseHour.addEventListener('mouseup', () => stopDecreasing('hour'));
decreaseMinute.addEventListener('mouseup', () => stopDecreasing('minute'));

decreaseHour.addEventListener('mouseleave', () => stopDecreasing('hour'));
decreaseMinute.addEventListener('mouseleave', () => stopDecreasing('minute'));

const startTimer = document.getElementById('startButton');
let countdownInterval;

startTimer.addEventListener('click', () => {
  if (startTimer.textContent === 'stop!') {
    clearInterval(countdownInterval);
    startTimer.textContent = 'start!';
    const changeTime = document.querySelectorAll('.changeTime');
    changeTime.forEach((element) => {
      element.classList.remove('disable');
    });
  } else {
    countdownInterval = setInterval(() => {
      if (currentHour === 0 && currentMinute === 0 && currentSecond === 0) {
        clearInterval(countdownInterval);
        alert('타이머가 종료되었습니다!');
        startTimer.textContent = 'start!';
        const changeTime = document.querySelectorAll('.changeTime');
        changeTime.forEach((element) => {
          element.classList.remove('disable');
        });
      } else {
        if (currentMinute === 0) {
          if (currentHour > 0) {
            currentHour--;
            currentMinute = 59;
          }
        }
        // 초가 0이면 분 감소
        if (currentSecond === 0) {
          if (currentMinute > 0) {
            currentMinute--;
            currentSecond = 59; // 초를 59로 초기화
          }
        } else {
          currentSecond--; // 초 감소
        }

        // 화면 업데이트
        hour.textContent = String(currentHour).padStart(2, '0');
        minute.textContent = String(currentMinute).padStart(2, '0');
        second.textContent = String(currentSecond).padStart(2, '0');
      }
    }, 1000); // 1초마다 실행
    startTimer.textContent = 'stop!';
    const changeTime = document.querySelectorAll('.changeTime');
    changeTime.forEach((element) => {
      element.classList.add('disable');
    });
  }
});

// to do list
const addButton = document.getElementById('add'); //추가하기 버튼
const tasklist = document.querySelector('.tasklist'); // 할일 목록
const newTask = document.getElementById('newTask');

function addTask() {
  const taskValue = newTask.value.trim();

  if (taskValue) {
    const createTask = document.createElement('li');
    createTask.classList.add('tasks');
    createTask.textContent = taskValue;
    const taskController = document.createElement('div');
    taskController.classList.add('taskController');

    const finishButton = document.createElement('button');
    finishButton.classList.add('taskFinished');
    finishButton.classList.add('controlTask');
    finishButton.classList.add('buttons');
    finishButton.textContent = '완료';
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteTask');
    deleteButton.classList.add('controlTask');
    deleteButton.classList.add('buttons');
    deleteButton.textContent = '삭제';

    newTask.value = '';
    taskController.appendChild(finishButton);
    taskController.appendChild(deleteButton);
    createTask.appendChild(taskController);
    tasklist.appendChild(createTask);
  } else {
    alert('할 일을 입력하세요');
  }
}

addButton.addEventListener('click', addTask);

// const taskFinished = document.querySelector('.taskFinished');
// taskFinished.addEventListener('click',()=>{

// })
