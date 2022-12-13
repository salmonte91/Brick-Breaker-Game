const mainMenu = document.querySelector('#main-menu');
const startBtn = document.querySelector('#startBtn');

function startGame(){
    mainMenu.remove();
}

startBtn.addEventListener('click', startGame)

