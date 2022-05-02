let player
const player1 = "x"
const player2 = "o"
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const block = document.querySelectorAll('.block')
const announceWinner = document.querySelector('.winnerText')
block.forEach(singleblock => {
    singleblock.addEventListener('click',handleClick, {once: true})
})
function handleClick(e) {
    const singleblock = e.target
    const currentPlayer = player ? player1 : player2 
    playerSymbol(singleblock, currentPlayer)
    changePlayer()
    if (win(currentPlayer)){
        end(false)
    }else if(draw()){
        end(true)
    }
}
function end(draw){
    if(draw){
        announceWinner.innerText = "Draw!"
    }else{
        announceWinner.innerText = `${player ? "Player1 Won!" : "Player2 Won!"}`
        alert('Game Over!')
        block.forEach(singleblock => {
            singleblock.removeEventListener('click', handleClick)
        })

    }
}
function draw() {
    return [...block].every(singleblock => {
        return singleblock.classList.contains(player1) || singleblock.classList.contains(player2)
    })
}
function playerSymbol(block, currentPlayer) {
    block.classList.add(currentPlayer)
}
function changePlayer() {
    player = !player
}
function win(currentPlayer){
    return winPatterns.some(winPlays => {
        return winPlays.every(index => {
            return block[index].classList.contains(currentPlayer)
        })                                                                                                                  
    })
}
