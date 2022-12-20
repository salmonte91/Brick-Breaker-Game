const mainMenu = document.querySelector('#main-menu');
const startBtn = document.querySelector('#startBtn');
const grid = document.querySelector('.grid');

grid.style.visibility = "hidden";


const blockTiles = ['./assets/Colored-Tiles/Blue-Tiles.png', './assets/Colored-Tiles/Green-Tiles.png', './assets/Colored-Tiles/Orange-Tiles.png', './assets/Colored-Tiles/Purple-Breakout-Tiles.png', './assets/Colored-Tiles/Red-Tiles.png', './assets/Colored-Tiles/Yellow-Tiles.png']

const animatePaddle = ['./assets/Paddle-images/Paddle-Animate1.png', './assets/Paddle-images/Paddle-Animate2.png', './assets/Paddle-images/Paddle-Animate3.png']

function startGame(){
    mainMenu.remove();
    grid.style.visibility = "visible";
    for(let i = 0; i < blockTiles.length; i++){ //creates multiple blocks of same color
        for(let j = 0; j < 19; j++){
            createBlocks(blockTiles[i])
        }
    }
    createPaddle(0)
}

startBtn.addEventListener('click', startGame)


function createBlocks(url){
    let block = document.createElement('img')
        block.src = url
        grid.appendChild(block)
        return block
}

function createPaddle(xAxis) {
    var paddle = document.createElement('img')
    paddle.src = './assets/Paddle-images/Paddle-Animate1.png'
    paddle.style.marginTop = '650px'
    paddle.style.width = '100px'
    paddle.style.left = xAxis + 'px'
    grid.appendChild(paddle)

    let direction


    document.addEventListener('keydown', function(move){
        if(move.key === 'ArrowLeft'){
        direction = 'left'
           if(xAxis === -720){
                direction = null
            }
        }
        else if(move.key === 'ArrowRight'){
        direction = 'right'
            if(xAxis === 720){
                direction = null
            }
        }
          xAxis =  movePaddle(direction,xAxis,paddle)

    })
    document.addEventListener('keyup', ()=> {
        direction = null
    })

}

function movePaddle(direction, x, paddle){

        if(direction === 'left'){
            x-=20
        }
        else if(direction === 'right'){
            x+=20
        }
        
        paddle.style.left = x + 'px'

        return x;
}