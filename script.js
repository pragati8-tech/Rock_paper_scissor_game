const scissorsBtn = document.querySelector('.scissors-btn')
const rockBtn = document.querySelector('.rock-btn')
const paperBtn = document.querySelector('.paper-btn')
const userHandIcon = document.querySelector('.user.hand-icon')
const computerHandIcon = document.querySelector('.computer.hand-icon')

scissorsBtn.addEventListener('click',()=>{
      userHandIcon.classList.add('shakeUserHands')
    computerHandIcon.classList.add('shakeComputerHands')

    setTimeout(() => {
        userHandIcon.classList.remove('shakeUserHands')
    computerHandIcon.classList.remove('shakeComputerHands')
    }, 500);
})
rockBtn.addEventListener('click',()=>{
    userHandIcon.classList.add('shakeUserHands')
    computerHandIcon.classList.add('shakeComputerHands')

    setTimeout(() => {
        userHandIcon.classList.remove('shakeUserHands')
    computerHandIcon.classList.remove('shakeComputerHands')
    }, 500);
})
paperBtn.addEventListener('click',()=>{
     userHandIcon.classList.add('shakeUserHands')
    computerHandIcon.classList.add('shakeComputerHands')

    setTimeout(() => {
        userHandIcon.classList.remove('shakeUserHands')
    computerHandIcon.classList.remove('shakeComputerHands')
    }, 500);
})