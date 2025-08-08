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


console.log(getComputerChoice());