// Exercise 2.0 mini-boss
// ------------
// Create a page that

// 1. contains 3 sections (one for each of the following)
// 1. displays the current time
// 2. contains a start/stop button with a stopwatch which starts at 00:00 and continues until the user clicks "stop"
// 3. contains a timer where the user can enter a number of seconds, click start and the timer counts down to 0.
// There should be a sound announcing the end as well.
// It would be a good idea to create a new function that will manage the whole game.

const body = document.querySelector('body');
const result = document.getElementById('result');
let timer = document.getElementById('timer');
// const myTimer = document.getElementById('myTimer');
// const mySound = 'win.mp3';

let hasWon = false;

let time = Math.floor((Math.random() * 5) + 1 );

// 1. contains 3 sections (one for each of the following)
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  const t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// 2. contains a start/stop button with a stopwatch which starts at 00:00 and continues until the user clicks "stop"

//let myTimer;
//let count = 60;

//$("#counter").text(count);
//update display

//myTimer = setTimeout(update, 1000);
//this allows for 'clearTimeout' if needed

//function myVar()
//{
//    if (count > 0)
//    {
//       $("#counter").text(--count);
//       timer = setTimeout(update, 1000);
//    }
//    else
//    {
//        alert("Done!!!");
//    }
//}

const myVar = setInterval(myTimer ,1000);
    function myTimer() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    }

// 3. contains a timer where the user can enter a number of seconds, click start and the timer counts down to 0.
// There should be a sound announcing the end as well.
//function mySound() {
//  this.sound = document.createElement("audio");
//  this.sound.src = src;
//  this.sound.setAttribute("preload", "auto");
//  this.sound.setAttribute("controls", "none");
//  this.sound.style.display = "none";
//  document.body.appendChild(this.sound);
//  this.play = function() {
//    this.sound.play();
//  }
//  this.stop = function() {
//    this.sound.pause();
//  }
//}


    function myTimer(callback, val) {
      mySound = new Audio('win.mp3');
      val = val || 60; 
      let timer=setInterval(function() { 
          callback(val);
          if(val-- <= 0) {
              mySound.play('win.mp3');  
              clearInterval(timer); 
          } 
      }, 1000);
  }
  new myTimer(function(val) {
      const timerMsg = "00:" + (val >= 10 ? val : "0" + val);
      document.getElementById("timer").textContent = timerMsg; 
  });    
// End of exercise 2 ---------------------------------------------------------------------------------

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


