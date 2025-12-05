const scissorsBtn = document.querySelector('.scissors-btn')
const rockBtn = document.querySelector('.rock-btn')
const paperBtn = document.querySelector('.paper-btn')
const userHandIcon = document.querySelector('.user.hand-icon')
const computerHandIcon = document.querySelector('.computer.hand-icon')
const result = document.querySelector('.result')
const userScore = document.querySelector('.user-score')
const computerScore = document.querySelector('.computer-score')

const rockIcon = '👊'
const paperIcon = '🖐️'
const scissorIcon = '✌️'
const iconList = [rockIcon,paperIcon,scissorIcon]

function calculateResult(selectedIcon, winningIcon){
     result.innerText = ''
    userHandIcon.innerText = '🤜'
    computerHandIcon.innerText = '🤛'
    userHandIcon.classList.add('shakeUserHands')
    computerHandIcon.classList.add('shakeComputerHands')
    setTimeout(() => {
        userHandIcon.classList.remove('shakeUserHands')
    computerHandIcon.classList.remove('shakeComputerHands')
    userHandIcon.innerText= selectedIcon
    const computerChoice = Math.floor(Math.random() *3)
     computerHandIcon.innerText = iconList[computerChoice]
     if(userHandIcon.innerText===computerHandIcon.innerText){
        result.innerText = 'draw'
     } else if(computerHandIcon.innerText === winningIcon){
        result.innerText= 'You won!!'
        userScore.innerText =  +userScore.innerText + 1
     } else{
        result.innerText = 'Computer won!!'
        computerScore.innerText = +computerScore.innerText + 1
     }
}, 500);
}

scissorsBtn.addEventListener('click',()=>{
   calculateResult(scissorIcon, paperIcon)
  
})
rockBtn.addEventListener('click',()=>{
     calculateResult(rockIcon,scissorIcon)    
})
paperBtn.addEventListener('click',()=>{
   calculateResult(paperIcon, rockIcon)
})