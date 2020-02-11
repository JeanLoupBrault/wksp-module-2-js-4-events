// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
// 
const body = document.querySelector('body');
const result = document.getElementById('result');
 // let MAX_TIME = 1000;
 let hasWon = false;

function clickEvent() {
    // for (i = 0; i <= 1000; i++) {
    //     if (clickEvent < )
        hasWon = true;
        result.innerText = 'You win';

        body.removeEventListener('click', clickEvent);
    }
    setTimeout(function() {
            if (!hasWon) {
                result.innerText = 'You lose';
            }
    
}, 1000);

body.addEventListener('click', clickEvent);
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll a flag to store whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------