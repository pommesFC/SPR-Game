const choices = ["ROCK", "PAPER", "SCISSOR"];
playAgain = true;

    let computerPoints = 0;
    let userPoints = 0;

    keepGoing = true;
    const event = window.event;

    while(keepGoing){

        function getChoice(event){

            const weapon = event.target.classList.contains('weapon');

            function getRandomElementFromArray(array) {
                const randomIndex = Math.floor(Math.random() * array.length);
                return array[randomIndex];
            }

            function getUserChoice(event){
                if(weapon){
                    let userChoiceId = event.target.id;
                    return  userChoiceId;
                }
            }
            let computerChoice = getRandomElementFromArray(choices);
            let userChoice = getUserChoice();

            console.log(userChoice, computerChoice);
        }

        const weaponsContainer = document.querySelector('#weapons-container');
        weaponsContainer.addEventListener('click', getChoice);

        keepGoing = false;
/*
        function Rock(){
            if(userChoice === "ROCK"){
                alert(`Draw! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
            }else if(userChoice === "PAPER"){
                userPoints = userPoints+1;
                alert(`You Win! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
            }else if(userChoice === "SCISSOR"){
                computerPoints = computerPoints+1;
                alert(`I Win! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
            }else{alert("Wrong Input");}
        }

        function Paper(){
            if(userChoice === "PAPER"){
                //alert(`Draw! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
            }else if(userChoice === "SCISSOR"){
                userPoints = userPoints+1;
                //alert(`You Win! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
            }else if(userChoice === "ROCK"){
                computerPoints = computerPoints+1;
                //alert(`I Win! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
            }//else{//alert("Wrong Input");}
        }
        function Scissor(){
            if(userChoice === "SCISSOR"){
                //alert(`Draw! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
            }else if(userChoice === "ROCK"){
                userPoints = userPoints+1;
               // alert(`You Win! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
            }else if(userChoice === "PAPER"){
                computerPoints = computerPoints+1;
                //alert(`I Win! User Points: ${userPoints} | Computer Points: ${computerPoints}`);
            }else{alert("Wrong Input!");}
        }


        if(computerChoice === "ROCK"){
            Rock();
        }else if(computerChoice === "PAPER"){
            Paper();
        }else if(computerChoice === "SCISSOR"){
            Scissor();
        }

        if(computerPoints === 5 || userPoints === 5){
            keepGoing = false;
        }else{
            keepGoing = true;
        }
        */
    }

    if(computerPoints === 5){
        alert("Computer Won! ");
    }else{alert("User Won")}

/*
    let gameBreaker = prompt("Enter 'Y' to play again and 'N' to exit: ");
    if(gameBreaker.toUpperCase === 'Y'){
        playAgain = true;
    }else{
        playAgain = false;
    }
    */

