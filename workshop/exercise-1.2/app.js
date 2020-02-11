// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click anywhere on the screen.
// 

const body = document.querySelector('body');
const result = document.getElementById('result');
let  maxTime = 0;
let hasWon = false;

const time = Math.floor((Math.random() * 5) + 1 );
document.getElementById("time").innerText = time;   

//function timedText() {
//    setTimeout(myTimeout1, 1000) 
//   setTimeout(myTimeout2, 2000) 
//    setTimeout(myTimeout3, 3000) 
//    setTimeout(myTimeout4, 4000)
//  }
//  function myTimeout1() {
//    document.getElementById("time").innerHTML = "4";
//    console.log('4 seconds remaining');
//  }
//  function myTimeout2() {
//    document.getElementById("time").innerHTML = "3";
//    console.log('3 seconds remaining');
//  }
//  function myTimeout3() {
//    document.getElementById("time").innerHTML = "2";
//    console.log('2 seconds remaining');
//  }
//  function myTimeout4() {
//   document.getElementById("time").innerHTML = "1";
//    console.log('1 seconds remaining');
//  }


function clickEvent() {
    // for (i = 0; i <= 1000; i++) {
    //     if (clickEvent < )
        hasWon = true;
        result.innerText = 'You win';

        body.removeEventListener('click', clickEvent);
    }
    setTimeout(function() {
        console.log('time up');
            if (!hasWon) {
                result.innerText = 'You lose';
            }
    
}, 1000);

console.log(time);

body.addEventListener('click', clickEvent);




// But this time, let's let the user know how much time they have to actually 'click'.
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// In short, 
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click
// - tell the user how much time they have to click.

// Challenge
// Make the countdown live...
