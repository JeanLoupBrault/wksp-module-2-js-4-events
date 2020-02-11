// Exercise 3.3
// ------------
// Buttons appear randomly and change color red to green to red on click.

const mainDiv = document.getElementById('main');

function toggleColor(event) {
    const buttonId = event.target.id;
//    const btnLeftPos = 0;
    document.getElementById(buttonId).classList.toggle('green'); //.style.left('btnLeftPos');
    
}

for (let i = 1; i <= 20; i++) {
    const button = document.createElement('button');
//    function getRandom(btnLeftPos) {
//       return Math.random(butLeftPos);
//    }
    
    button.innerText = i;
    button.id = `btn-${i}`;
    mainDiv.appendChild(button);
    button.style.top = `${Math.random() * 80}vh`;
    button.style.left = `${Math.random() * 80}vw`;

    button.addEventListener('click', toggleColor);

}
