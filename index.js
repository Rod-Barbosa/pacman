const width = 28
const grid = document.querySelector(".grid")
const scoreDisplay = document.querySelector("#score")
const squares = []
let score = 0

//28 * 28 = 784

  const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
]

// crete board

function createBoard(){
    for(let i=0;i<layout.length;i++){
        //create square
        const square = document.createElement("div")
        //put square in grid
        grid.appendChild(square)
        squares.push(square)

  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty
        if(layout[i] === 0){
            squares[i].classList.add("pac-dot")
        } else if(layout[i] === 1){
            squares[i].classList.add("wall")
        } else if(layout[i] === 2){
            squares[i].classList.add("ghost-lair")
        } else if(layout[i] === 3){
            squares[i].classList.add("power-pellet")
        }
    }
}

createBoard()

//starting position of pacman
let pacmanCurrentIndex = 490

squares[pacmanCurrentIndex].classList.add("pacman")
// squares[500].style.border = "1px solid black"

function control(e){
    squares[pacmanCurrentIndex].classList.remove("pacman")
    switch (e.key){
        case "ArrowDown":
            console.log('pressed down')
            if( !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair") && 
                !squares[pacmanCurrentIndex + width].classList.contains("wall") && 
                pacmanCurrentIndex + width < width*width)
                    pacmanCurrentIndex +=width
            break;
            case "ArrowUp":
            console.log('pressed up')
            if( !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair") &&
                !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
                pacmanCurrentIndex - width >= 0) 
                    pacmanCurrentIndex -=width
            break;
            case "ArrowLeft":
            console.log('pressed left')
            if( !squares[pacmanCurrentIndex -1].classList.contains("ghost-lair") &&
            !squares[pacmanCurrentIndex -1].classList.contains("wall") &&
            pacmanCurrentIndex % width !== 0)
            pacmanCurrentIndex -=1    

            if(pacmanCurrentIndex===364) pacmanCurrentIndex=391
            break;
            case "ArrowRight":
            console.log('pressed right')
            if( !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair") &&
            !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
            pacmanCurrentIndex % width < width-1)
            pacmanCurrentIndex +=1

            if(pacmanCurrentIndex===391) pacmanCurrentIndex=364
            break;
        }                
        squares[pacmanCurrentIndex].classList.add("pacman")
        pacDotEaten()
        powerPalletEaten()
        checkForWin()
    }
    // if (e.keyCode === 40){
    //     console.log("pressed down")
    // } else if (e.keyCode === 39){
    //     console.log("pressed right")
    // } else if (e.keyCode === 38){
    //     console.log("pressed up")
    // } else if (e.keyCode === 37){
    //     console.log("pressed left")
    // }

document.addEventListener("keydown", control)

function pacDotEaten(){
    if(squares[pacmanCurrentIndex].classList.contains("pac-dot")){
        score++
        squares[pacmanCurrentIndex].classList.remove("pac-dot")
        scoreDisplay.innerHTML = score
    }
}

function powerPalletEaten(){
    //if square pacman is in contains power pallet
    if(squares[pacmanCurrentIndex].classList.contains("power-pellet")){
        //remove power=pallet
        squares[pacmanCurrentIndex].classList.remove("power-pellet")
        //add 10 to score
        score+=10
        scoreDisplay.innerHTML=score
        //change each ghost to isScared
        ghosts.forEach(ghost => ghost.isScared = true)
        //use setTimeout to unscare ghost after 10 seconds
        setTimeout(unScareGhosts, 10000)
    }
}

function unScareGhosts(){
    ghosts.forEach(ghost => ghost.isScared = false)
}

class Ghost {
    constructor(className, startIndex, speed){
        this.className = className;
        this.startIndex = startIndex;
        this.speed = speed;
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}

const ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]
//draw my ghosts onto my grid
ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add("ghost")
})

//move the ghosts
ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost){
    console.log("moved ghost")
    const directions = [-1, +1, -width, +width]
    let direction = directions[Math.floor(Math.random() * directions.length)]
    console.log(direction)

    ghost.timerId = setInterval(function(){

        //respect walls and respect ghosts
        if( 
            !squares[ghost.currentIndex + direction].classList.contains("wall") &&
            !squares[ghost.currentIndex + direction].classList.contains("ghost")
        ){
            //remove any ghost
            squares[ghost.currentIndex].classList.remove(ghost.className)
            squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost")
            //add direction to current Index
            ghost.currentIndex += direction
            //add ghost class
            squares[ghost.currentIndex].classList.add(ghost.className)
            squares[ghost.currentIndex].classList.add("ghost")
        } else {direction = directions[Math.floor(Math.random() * directions.length)]}

        //if the ghost is currently scared
        if(ghost.isScared){
            squares[ghost.currentIndex].classList.add("scared-ghost")
        }

        //if the ghost is currently scared and pacman is on it
        if(ghost.isScared && squares[ghost.currentIndex].classList.contains("pacman")){
            //remove classname - ghost.className, ghsot, scared-ghost
            squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
            //cahnge ghost currentIndex back to its statsIndex
            ghost.currentIndex = ghost.startIndex
            //add a score of 100
            score +=100
            scoreDisplay.innerHTML=score
            //readd classnames of ghos.className and ghost to the ghosts new position
            squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
        }
        checkGameOver()
    }, ghost.speed)

}

//check for game over
function checkGameOver(){
    //if square pacman is in contains ghost and ghost is not scared
    if ( 
        squares[pacmanCurrentIndex].classList.contains("ghost") && 
        !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
        ){
            //for each ghost - we need to stop it moving
            ghosts.forEach(ghost => clearInterval(ghost.timerId))        
            //remove evenlistener from our control function
            document.removeEventListener("keydown", control)
            //alert user the game is over
            scoreDisplay.innerHTML="YOU LOSE"
        }
}

//check for win
function checkForWin(){
    if(score >= 274) {
        //stop each ghost moving
        ghosts.forEach(ghost => clearInterval(ghost.timerId))        
        //remove evnetlistener
        document.removeEventListener("keydown", control)
        //alert win
        scoreDisplay.innerHTML="YOU WIN"

    }
}
