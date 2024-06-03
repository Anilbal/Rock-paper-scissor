const computerChoiceDisplay=document.getElementById('computer-choice')
const userChoiceDisplay=document.getElementById('user-choice')
const resultDisplay=document.getElementById('result')
const possibleChoices=document.querySelectorAll('button')
let userChoice
let computerChoice
let user
possibleChoices.forEach(possibleChoices=>possibleChoices.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*possibleChoices.length)+1

    if(randomNumber===1){
        computerChoice="rock"
    }
    if(randomNumber===2){
        computerChoice="paper"
    }
    if(randomNumber===3){
        computerChoice="scissors"
    }
    computerChoiceDisplay.innerHTML=computerChoice
}

function getResult(){
    if(computerChoice===userChoice){
        result ="It's Draw"
    }

    if(computerChoice==="rock" && userChoice==="scissors"){
        result ="It's lose"
    }

    if(computerChoice==="rock" && userChoice==="paper"){
        result ="It's win"
    }
    if(computerChoice==="paper" && userChoice==="scissors"){
        result ="It's win"
    }
    if(computerChoice==="paper" && userChoice==="rock"){
        result ="It's lose"
    }
    if(computerChoice==="scissors" && userChoice==="rock"){
        result ="It's win"
    }
    if(computerChoice==="scissors" && userChoice==="paper"){
        result ="It's lose"
    }
    resultDisplay.innerHTML=result
}
