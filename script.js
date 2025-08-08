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

console.log(getComputerChoice());
console.log(getHumanChoice());