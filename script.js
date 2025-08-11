console.log("Hello World")

function getComputerChoice () {
    let num = Math.floor(Math.random() * 3) + 1
    if(num === 1){
        return "Rock"
    }else if(num === 2){
        return "Paper"
    }else{
        return "Scissor"
    }
}

function getHumanChoice () {
    let data = prompt("Enter 1: Rock, 2: Paper, 3: Scissor")
    if(data === "1"){
        return "Rock"
    }else if(data === "2"){
        return "Paper"
    }else{
        return "Scissor"
    }
}

let humanScore = 0
let computerScore = 0

function playRound (humanChoice, computerChoice) {
    if(humanChoice === computerChoice){
        console.log("It's a tie! Try again")
        return
    }
    if(humanChoice === "Rock"){
        if(computerChoice === "Paper"){
            computerScore++
            console.log("Computer Wins!")
        }else{
            humanScore++
            console.log("You win!")
        }
    }else if(humanChoice === "Paper"){
        if(computerChoice === "Scissor"){
            computerScore++
            console.log("Computer Wins!")
        }else{
            humanScore++
            console.log("You win!")
        }
    }else if(humanChoice === "Scissor"){
        if(computerChoice === "Rock"){
            computerScore++
            console.log("Computer Wins!")
        }else{
            humanScore++
            console.log("You win!")
        }
    }
}

function playGame() {
     for(i=0;i<5;i++){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        console.log(`Your score: ${humanScore}  Computer Score ${computerScore}`)
     }
}

playGame()





