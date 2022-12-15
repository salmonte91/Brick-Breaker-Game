const mainMenu = document.querySelector('#main-menu');
const startBtn = document.querySelector('#startBtn');
const grid = document.querySelector('.grid');

const blockTiles = ['./assets/Colored-Tiles/Blue-Tiles.png', './assets/Colored-Tiles/Green-Tiles.png', './assets/Colored-Tiles/Orange-Tiles.png', './assets/Colored-Tiles/Purple-Breakout-Tiles.png', './assets/Colored-Tiles/Red-Tiles.png', './assets/Colored-Tiles/Yellow-Tiles.png']

const animatePaddle = ['./assets/Paddle-images/Paddle-Animate1.png', './assets/Paddle-images/Paddle-Animate2.png', './assets/Paddle-images/Paddle-Animate3.png']

function startGame(){
    mainMenu.remove();
    for(let i = 0; i < blockTiles.length; i++) //creates multiple blocks of same color
{
  
  for(let j = 0; j < 19; j++)
  {
    createBlocks(blockTiles[i])
  }
}
    createPaddle('./assets/Paddle-images/Paddle-Animate1.png')
}

startBtn.addEventListener('click', startGame)


function createBlocks(url){
    let block = document.createElement('img')
        block.src = url
        grid.appendChild(block)
        return block
}

function createPaddle(url){
    let paddle = document.createElement('img')
        paddle.src = url
        paddle.style.marginTop = '750px'
        paddle.style.width = '100px'
        grid.appendChild(paddle)
        return paddle
}