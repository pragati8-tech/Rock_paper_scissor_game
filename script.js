const scissorsBtn = document.querySelector('.scissors-btn')
const rockBtn = document.querySelector('.rock-btn')
const paperBtn = document.querySelector('.paper-btn')
const userHandIcon = document.querySelector('.user.hand-icon')
const computerHandIcon = document.querySelector('.computer.hand-icon')
const result = document.querySelector('.result')
const rockIcon = '👊'
const paperIcon = '🖐️'
const scissorIcon = '✌️'
const iconList = [rockIcon,paperIcon,scissorIcon]
scissorsBtn.addEventListener('click',()=>{
    result.innerText = ''
    userHandIcon.innerText = '🤜'
    computerHandIcon.innerText = '🤛'
      userHandIcon.classList.add('shakeUserHands')
    computerHandIcon.classList.add('shakeComputerHands')
    setTimeout(() => {
        userHandIcon.classList.remove('shakeUserHands')
    computerHandIcon.classList.remove('shakeComputerHands')
    userHandIcon.innerText = scissorIcon
        const computerChoice = Math.floor(Math.random() *3)
     computerHandIcon.innerText = iconList[computerChoice]
     if(userHandIcon.innerText===computerHandIcon.innerText){
        result.innerText = 'draw'
     } else if(computerHandIcon.innerText == paperIcon){
        result.innerText= 'You won!!'
     } else{
        result.innerText = 'Computer won!!'
     }
    }, 500);
})
rockBtn.addEventListener('click',()=>{
      result.innerText = ''
    userHandIcon.innerText = '🤜'
    computerHandIcon.innerText = '🤛'
    userHandIcon.classList.add('shakeUserHands')
    computerHandIcon.classList.add('shakeComputerHands')

    setTimeout(() => {
        userHandIcon.classList.remove('shakeUserHands')
    computerHandIcon.classList.remove('shakeComputerHands')
    userHandIcon.innerText= rockIcon
    const computerChoice = Math.floor(Math.random() *3)
     computerHandIcon.innerText = iconList[computerChoice]
     if(userHandIcon.innerText===computerHandIcon.innerText){
        result.innerText = 'draw'
     } else if(computerHandIcon.innerText === scissorIcon){
        result.innerText= 'You won!!'
     } else{
        result.innerText = 'Computer won!!'
     }
}, 500);

    
})
paperBtn.addEventListener('click',()=>{
      result.innerText = ''
    userHandIcon.innerText = '🤜'
    computerHandIcon.innerText = '🤛'
     userHandIcon.classList.add('shakeUserHands')
    computerHandIcon.classList.add('shakeComputerHands')

    setTimeout(() => {
        userHandIcon.classList.remove('shakeUserHands')
    computerHandIcon.classList.remove('shakeComputerHands')
    userHandIcon.innerText= paperIcon
        const computerChoice = Math.floor(Math.random() *3)
     computerHandIcon.innerText = iconList[computerChoice]
     if(userHandIcon.innerText===computerHandIcon.innerText){
        result.innerText = 'draw'
     } else if(computerHandIcon.innerText == rockIcon){
        result.innerText= 'You won!!'
     } else{
        result.innerText = 'Computer won!!'
     }
    }, 500);
})