

const choices = ["ROCK", "PAPER", "SCISSOR"];
let computerPoints = 0;
let userPoints = 0;
keepGoing = true;

while(keepGoing){

    function getRandomElementFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
    }

    let computerChoice = getRandomElementFromArray(choices);
    let userChoice = prompt("Enter your choice: ").toUpperCase();

    console.log(`User Choice: ${userChoice} || Computer Choice: ${computerChoice}`)
    function Rock(){
        if(userChoice === "ROCK"){
            console.log(`Draw! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
        }else if(userChoice === "PAPER"){
            userPoints = userPoints+1;
            console.log(`You Win! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
        }else if(userChoice === "SCISSOR"){
            computerPoints = computerPoints+1;
            console.log(`I Win! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
        }else{console.log("Wrong Input");}
    }

    function Paper(){
        if(userChoice === "PAPER"){
            console.log(`Draw! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
        }else if(userChoice === "SCISSOR"){
            userPoints = userPoints+1;
            console.log(`You Win! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
        }else if(userChoice === "ROCK"){
            computerPoints = computerPoints+1;
            console.log(`I Win! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
        }else{console.log("Wrong Input");}
    }
    function Scissor(){
        if(userChoice === "SCISSOR"){
            console.log(`Draw! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
        }else if(userChoice === "ROCK"){
            userPoints = userPoints+1;
            console.log(`You Win! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
        }else if(userChoice === "PAPER"){
            computerPoints = computerPoints+1;
            console.log(`I Win! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
        }else{console.log("Wrong Input!");}
    }


    if(computerChoice === "ROCK"){
        Rock();
    }else if(computerChoice === "PAPER"){
        Paper();
    }else if(computerChoice === "SCISSOR"){
        Scissor();
    }
    console.log("<!----------------!>")

    if(computerPoints === 5 || userPoints === 5){
        keepGoing = false;
    }else{
        keepGoing = true;
    }
}
if(computerPoints === 5){
    console.log("Computer Won! ");
}else{console.log("User Won")}

