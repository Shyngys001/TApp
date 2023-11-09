let isDone = false;

function cont() {
  isDone = false;
  onLoad();
}

function onLoad() {

  let firstBtn = document.querySelector('.btn');
  if (!isDone) {
    firstBtn.style.backgroundColor = '#a09f9f'
  } else {
    firstBtn.style.backgroundColor = '#FFA500'
  }
}

// onLoad()


function saveGroup() {
  let firstInput = document.querySelector('.firstInput');
  let secondInput = document.querySelector('.secondInput');
}


function forward() {

  const params = (new URL(document.location)).searchParams;
  const top1 = params.get('top1');
  const top2 = params.get('top2');

  sessionStorage.setItem('top1', top1)
  sessionStorage.setItem('top2', top2)

}

async function setGroupName() {
  let top1 = sessionStorage.getItem("top1");
  let top2 = sessionStorage.getItem("top2");

  //top1Sum

  let score1 = parseInt(sessionStorage.getItem("score1"));
  let score2 = parseInt(sessionStorage.getItem("score2"));
  let totalScore = parseInt(sessionStorage.getItem('sozder'));
  let index = sessionStorage.getItem('index');
  const response = await fetch('words.txt');
  const text = await response.text();
  const words = text.trim().split('\n');

  //TODO:
  if (score1 >= totalScore || score2 >= totalScore ||
      index >= words.length) {
    window.location.href = 'final.html';
    return;
  }
  document.querySelector('.top1Name').innerHTML = top1;
  document.querySelector('.top2Name').innerHTML = top2;
  document.querySelector('.top1Sum').innerHTML = sessionStorage.getItem('score1');
  document.querySelector('.top2Sum').innerHTML = sessionStorage.getItem('score2');
}

function currentGroup() {
  let flip = sessionStorage.getItem('flip');
  document.getElementById('timer').innerHTML = sessionStorage.getItem('time') + ' секунд қалды'
  if(flip === 'group1') {
    document.querySelector('.group').innerHTML = sessionStorage.getItem("top1");
    sessionStorage.setItem('flip', 'group2');
  } else {
    document.querySelector('.group').innerHTML = sessionStorage.getItem("top2");
    sessionStorage.setItem('flip', 'group1');
  }

}



const checkbox = document.getElementById('myCheckbox');

// Check if there is a saved state for the checkbox
const savedState = localStorage.getItem('checkboxState');
if (savedState) {
  checkbox.checked = JSON.parse(savedState);
}

checkbox.addEventListener('change', function() {
  localStorage.setItem('checkboxState', this.checked);
  if (this.checked) {
    window.location.href = 'dark_sec.html';
  } else {
    window.location.href = 'sec.html';
  }
});
