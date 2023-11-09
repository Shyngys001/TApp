const input = document.querySelector('.input');
const statusContainer = document.querySelector('.status-container');
let wordList;

fetch('qate.txt')
  .then(response => response.text())
  .then(data => {
    wordList = data.split(/\r?\n/).map(word => word.toLowerCase().trim());
  })
  .catch(error => console.error(error));

input.addEventListener('input', () => {
  const words = input.value.trim().toLowerCase().split(/\s+/);

  statusContainer.innerHTML = '';
  incorrect_words = [];    

  words.forEach(word => {
    const isCorrect = wordList && wordList.includes(word);

    const status = document.createElement('div');
    status.classList.add('status');
    status.classList.add(isCorrect ? 'correct' : 'incorrect');

    const wordLabel = document.createElement('div');
    wordLabel.classList.add('word');
    wordLabel.textContent = word;
    wordLabel.classList.add(isCorrect ? 'correct' : 'incorrect');


    status.appendChild(wordLabel);
    statusContainer.appendChild(status);
  });
});


const checkbox = document.getElementById('myCheckbox');

checkbox.addEventListener('change', function() {
  if(this.checked) {
    window.location.href = 'sec.html';
  }
  else{
    window.location.href = 'erezhe.html';
  }
});
