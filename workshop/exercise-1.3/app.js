// Exercise 1.3
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH! (This is the last time.)
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click the screen.

// It would be a good idea to create a new function that will manage the whole game.

const body = document.querySelector('body');
const result = document.getElementById('result');
const timer = document.getElementById('timer');
let hasWon = false;

const time = Math.floor((Math.random() * 5) + 1 );


timer.innertext = time;
let maxTime = time - 1;

const counter = setInterval(function() {
  if (maxTime === 0) {
    clearInterval(counter);
  }
  timer.innerText = maxTime;
  maxTime = maxTime - 1;
}, 1000);

function clickEvent() {

        hasWon = true;
        result.innerText = 'You win';

        body.removeEventListener('click', clickEvent);
    }
    setTimeout(function() {
        
            if (!hasWon) {
                result.innerText = 'You lose';
            }
            body.removeEventListener('click', clickEvent);
}, time * 1000);

body.addEventListener('click', clickEvent);


