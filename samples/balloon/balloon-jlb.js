const balloon = document.getElementById('balloon');
let balloonSize = 12;
balloonSize.style.fontSize = `${balloonSize}px`;
const MIN_SIZE = 6;
const MAX_SIZE = 100;
const INCREMENT = 2;
const MAX_EXPLOSION_SIZE = 1000;
function handleKeydown(event) = {
    console.log(event.key);

    // if arrow up
    if (event.key === 'ArrowUp') {
        
        // balloon bigger
        balloonSize += INCREMENT;
        balloonSize.style.fontSize = `${balloonSize}px`;
    
               // if balloon is bigger than x 
               if (balloonSize > MAX_SIZE) {

            // remove event listener
            document.removeEvent«Listener('keydown', handleKeydown);

            // remove the balloon / add in explosion
            balloonSize.innertext = '💥';
            // explosion grows incrementally
            const explosion = setInterval(function() {
                balloonSize += 50;
                balloonSize.style.fontSize = `${balloonSize}px`;
            }, 30);
            
                // if explosion size is y 
                if (balloonSize > MAX_EXPLOSION_SIZE) {

                
                    // stop growing
                    clearInterval(exlosion);
                        // fadeout
                        balloonSize.opacity = 0;
    } else if (event.key === 'ArrowDown') {
        
    
    // if arrow dowm
         // if balloon is z bigger than Z
        if (balloonSize > MIN_SIZE) {
        
         // make balloon smaller
         balloonSize -= INCREMENT;
         balloonSize.style.fontSize = `${balloonSize}px`;

        }
        }
    }
}       
// event listener that listen for a keydown
document.addEventListener('keydown', handlKeydown);


}



