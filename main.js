const mainMenu = document.querySelector('#main-menu');
const startBtn = document.querySelector('#startBtn');
const grid = document.querySelector('.grid');

const blockTiles = ['./assets/Colored-Tiles/Blue-Tiles.png', './assets/Colored-Tiles/Brown-Tiles.png', './assets/Colored-Tiles/Gray-Tiles.png', './assets/Colored-Tiles/Green-Tiles.png', './assets/Colored-Tiles/Orange-Tiles.png', './assets/Colored-Tiles/Purple-Breakout-Tiles.png', './assets/Colored-Tiles/Red-Tiles.png', './assets/Colored-Tiles/Yellow-Tiles.png']

function startGame(){
    mainMenu.remove();
}

startBtn.addEventListener('click', startGame)


function createBlocks(){
    let block = document.createElement('img')
        block.src = './assets/Colored-Tiles/Blue-Tiles.png'
        grid.appendChild(block)
}

createBlocks()