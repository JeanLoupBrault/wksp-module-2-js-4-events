// Exercise 4.0
// ------------
// Game with buttons. On load, there is only a 'Start' button
// - clicking on the start button
// - deletes the button
// - a random number of buttons appear on the screen.
// - These buttons need to all be clicked within a given amount of time.
// If the user is successful, reward them! They've won the game!!

const mainDiv = document.getElementById('main');
let timer = document.getElementById('timer');
let winLose = document.getElementById('you-win');
let randomCounter = 0;


function toggleColor(event) {
    const buttonId = event.target.id;

    document.getElementById(buttonId).classList.toggle('green'); 
    
}
function toggleVisible(event) {
    const buttonId = event.target.id;

    document.getElementById(buttonId).classList.visibility('hidden'); 
    
}

function myTimer(callback, val) {
    mySound = new Audio("win.mp3");
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

randomCounter = Math.floor(Math.random() * 10) + 1;
let clickCounter = 0;

for (let i = 1; i <= randomCounter; i++) {
    const button = document.createElement('button');
    
    button.innerText = i;
    button.id = `btn-${i}`;
    mainDiv.appendChild(button);
    button.style.top = `${Math.random() * 80}vh`;
    button.style.left = `${Math.random() * 80}vw`;
    button.style.visibility = 'visible';
    
    button.addEventListener('click', toggleColor);
    clickCounter = clickCounter + 1;    
    };

function youWin() {
    if (button.color === 'green' && clickCounter === randomCounter) {
        document.getElementById("you-win").textContent = 'You win!!!'; 
//        console.log('You win!');
        mySound.play('win.mp3');  
}
        document.getElementById("you-win").textContent = 'You lose!!!'; 
//        console.log('You lose!!!');
}

//    button.removeEventListener('click', toggleColor);

