// Exercise 3.2
// ------------
// Buttons that change color red to green to red on click.

const mainDiv = document.getElementById('main');

function toggleColor(event) {
    const buttonId = event.target.id;
    document.getElementById(buttonId).classList.toggle('green');
}

// function turnRed(event) {
//    const buttonId = event.target.id;
//    document.getElementById(buttonId).classList.add('red');
//}

for (let i = 1; i <= 20; i++) {
    const button = document.createElement('button');
    button.innerText = i;
    button.id = `btn-${i}`;
    mainDiv.appendChild(button);

    button.addEventListener('click', toggleColor);

//    button.addEventListener('click', turnRed);
}
