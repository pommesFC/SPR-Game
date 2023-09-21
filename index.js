const choices = ["ROCK", "PAPER", "SCISSOR"];
playAgain = true;
    let userName =  'userName';//prompt("Enter your Username: ");
    let computerPoints = 0;
    let userPoints = 0;
    let i=0;

    keepGoing = true;
    let userChoice = "";

    const rock = document.querySelector('#ROCK');
    const paper = document.querySelector('#PAPER');
    const scissor = document.querySelector('#SCISSOR');

    rock.addEventListener('click', function(e){
        userChoice = rock.getAttribute('id');
        return userChoice;
    });
    scissor.addEventListener('click', function(e){
        userChoice = scissor.getAttribute('id');
        return userChoice;
    });
    paper.addEventListener('click', function(e){
        userChoice = paper.getAttribute('id');
        console.log(userChoice);
    });
    let userPointsDisplay = document.querySelector('#user-points');
    let computerPointsDisplay = document.querySelector('#computer-points');
    let remarks = document.querySelector('#remarks');

    console.log(`${userChoice} is returned `);

    while(keepGoing && userChoice != ""){
        console.log('inside while');
    function getRandomElementFromArray(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
    let computerChoice = getRandomElementFromArray(choices);
   
        function Rock(){
            console.log(`${userChoice} in rock`);
            if(userChoice === "ROCK"){
                remarks.innerText =("It's a DRAW! ");
                userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
                computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
            }else if(userChoice === "PAPER"){
                userPoints = userPoints+1;
                remarks.innerText =("It's a WIN ! ");
                userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
                computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
            }else if(userChoice === "SCISSOR"){
                computerPoints = computerPoints+1;
                remarks.innerText =("You LOST! ");
                userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
                computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
            }else{remarks.innerText =("wrong Input ");}
        }

        function Paper(){
            console.log(`${userChoice} in scik`);
            if(userChoice === "PAPER"){
                remarks.innerText =("It's a DRAW! ");
                userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
                computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
            }else if(userChoice === "SCISSOR"){
                userPoints = userPoints+1;
                remarks.innerText =("It's a WIN ! ");
                userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
                computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
            }else if(userChoice === "ROCK"){
                computerPoints = computerPoints+1;
                remarks.innerText =("You LOST! ");
                userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
                computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
            }else{remarks.innerText =("wrong Input ");}
        }
        function Scissor(){
            console.log(`${userChoice} in paapck`);
            if(userChoice === "SCISSOR"){
                remarks.innerText =("It's a DRAW! ");
                userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
                computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
            }else if(userChoice === "ROCK"){
                userPoints = userPoints+1;
                remarks.innerText =("It's a WIN ! ");
                userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
                computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
            }else if(userChoice === "PAPER"){
                computerPoints = computerPoints+1;
                remarks.innerText =("You LOST! ");
                userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
                computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
            }else{remarks.innerText =("wrong Input ");}
        }


        if(computerChoice === "ROCK"){
            Rock();
        }else if(computerChoice === "PAPER"){
            Paper();
        }else if(computerChoice === "SCISSOR"){
            Scissor();
        }
        i++;
        if(computerPoints === 5 || userPoints === 5 || i===5){
            keepGoing = false;
        }else{
            keepGoing = true;
        }

    }

    if(computerPoints === 5){
        remarks.innerText = ("Computer Won This WAR! ");
    }else if(userPoints===5){
        remarks.innerText = ("Congratulations on saving Humanity!")
    }else{remarks.innerText = ('No Game')};

/*
    let gameBreaker = prompt("Enter 'Y' to play again and 'N' to exit: ");
    if(gameBreaker.toUpperCase === 'Y'){
        playAgain = true;
    }else{
        playAgain = false;
    }
    */

