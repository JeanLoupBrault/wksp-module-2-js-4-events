// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, let them know that they did it!
const body = document.querySelector('body');
const result = document.getElementById('result');


// Hints:
// - Target the <body>
function clickEvent() {
    result.innertext = "You win!";

    body.removeEventListener('click', clikEvent);
}
body.addEventListener('click', clickEvent);
// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------
