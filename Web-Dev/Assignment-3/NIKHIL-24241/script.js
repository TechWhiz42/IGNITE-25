const buttonElement = document.querySelector('.hello-button');
const greetingElement = document.querySelector('.greeting');

let showing = false;

buttonElement.addEventListener('click', () => {
  if (!showing) {
    greetingElement.innerHTML = 'Hello, javascript World';
    buttonElement.innerHTML = 'Click to remove';
  } else {
    greetingElement.innerHTML = '';
    buttonElement.innerHTML = 'Click Me!'
  }
  showing = !showing;
});

const toggleButton = document.querySelector('.toggle-btn');
const toggleBox = document.querySelector('.toggle-box');

toggleButton.addEventListener('click', () => {
  if (toggleBox.style.display === 'none' || toggleBox.style.display === '') {
    toggleBox.style.display = 'block';
  } else {
    toggleBox.style.display = 'none';
  }
});

const input = document.querySelector('.input-box');
const addElement = document.querySelector('.add-button');
const list = document.querySelector('.item-list');
const dltButton = document.querySelector('.delete-btn');

addElement.addEventListener('click', () => {
  const value = input.value.trim();
  if (value !== '') {
    const li = document.createElement('li');
    li.textContent = value;
    list.appendChild(li);
    input.value = '';
    input.focus();
  }
});
dltButton.addEventListener('click', ()=>{
  list.innerHTML = '';
})

const colouButton = document.querySelector('.color-btn');

function getRandomColour() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

colouButton.addEventListener('click', () => {
  const randomColor = getRandomColour();
  document.body.style.backgroundColor = randomColor;
});

const textArea = document.querySelector('.text-area');
const coutDisplay = document.querySelector('.word-count');

textArea.addEventListener('input', () => {
  const charCount = textArea.value.length;
  coutDisplay.textContent = charCount;
})