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
    createBall(-65)
}

startBtn.addEventListener('click', startGame)


function createBlocks(url){
    let block = document.createElement('img')
        block.src = url
        grid.appendChild(block)
        return block
}

function createPaddle(xAxis) {
    let paddle = document.createElement('img')
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
          xAxis =  movePaddleBall(direction,xAxis,paddle)

    })
    document.addEventListener('keyup', ()=> {
        direction = null
    })

}

function movePaddleBall(direction, x, object){

        if(direction === 'left'){
            x-=20
        }
        else if(direction === 'right'){
            x+=20
        }
        
        object.style.left = x + 'px'

        return x;
}

function createBall(xAxis){
    let ball = document.createElement('img')
    ball.src = './assets/Paddle-images/Paddle-Ball.png'
    ball.style.marginTop = '630px'
    ball.style.left = xAxis + 'px'
    ball.style.width = '25px'
    ball.style.height = '25px'
    grid.appendChild(ball)

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
          xAxis =  movePaddleBall(direction,xAxis,ball)

    })
    document.addEventListener('keyup', ()=> {
        direction = null
    })

}

