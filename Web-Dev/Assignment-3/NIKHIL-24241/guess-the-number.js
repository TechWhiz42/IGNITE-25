const guessNumber = Math.floor(Math.random() * 10) + 1;

function guessTheNumber() {
  const userGuess = Number(document.querySelector('.guess-box').value);
  const resultBox = document.querySelector('.result');

  if (userGuess === guessNumber) {
    alert("Correct!");
    resultBox.innerHTML = "You guessed it right!";
  } else {
    alert(`Wrong! The number was ${guessNumber}.`);
    resultBox.innerHTML = `Its was incorrect. The right answer is ${guessNumber}`
  }
}

document.querySelector('.guess-btn').addEventListener('click', guessTheNumber);
