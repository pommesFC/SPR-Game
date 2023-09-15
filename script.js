const choices = ["ROCK", "PAPER", "SCISSOR"];

let userName =  'userName';//prompt("Enter your Username: ");
let computerPoints = 0;
let userPoints = 0;
let userChoice='';
let computerChoice= '';

const rock = document.querySelector('#ROCK');
const paper = document.querySelector('#PAPER');
const scissor = document.querySelector('#SCISSOR');

const scissorChoiceUser = document.querySelector('#scissor-choice');
const scissorChoiceComputer = document.querySelector('#scissor-choice-computer');
const paperChoiceUser = document.querySelector('#paper-choice');
const paperChoiceComputer = document.querySelector('#paper-choice-computer');
const rockChoiceUser = document.querySelector('#rock-choice');
const rockChoiceComputer = document.querySelector('#rock-choice-computer');
const questionmarkUser = document.querySelector('#questionmark');
const questionmarkComputer = document.querySelector('#questionmark-computer');
const userPointsDisplay = document.querySelector('#user-points');
const computerPointsDisplay = document.querySelector('#computer-points');
const remarks = document.querySelector('#remarks');
const endGameContainer = document.querySelector('#end-game-container');
const endText = document.querySelector('#end-text');
const endButton = document.querySelector('#end-button');

function getComputerChoice(array){

    function getRandomElementFromArray(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    };
    computerChoice = getRandomElementFromArray(array);
};
function checkEndGame(){
    if(computerPoints > 10 || userPoints >10 ){
        endGameContainer.style.display = "flex";
        if(computerPoints > userPoints && computerPoints > 10){
            endText.innerText = ("Computer Won This WAR! ");
            endButton.innerText =("Try Again!")
        }else if(userPoints > computerPoints && userPoints>10){
            endText.innerText = ("Congratulations on saving Humanity!");
            endButton.innerText = ('Play Again !')
        }else{endText.innerText = ('No Game')};
        
    }
    
};
function displayChoice(){
    const displayNodes = document.querySelectorAll('.display');
    const displayNodesComputer = document.querySelectorAll('.display-computer');

    for(i=0; i<displayNodes.length; i++){
        let item = displayNodes[i];
        item.removeAttribute('class');
        item.setAttribute('class','choicedisplay-player');
    }
    for(i=0; i<displayNodesComputer.length; i++){
        let itemComputer = displayNodesComputer[i]
        itemComputer.removeAttribute('class');
        itemComputer.setAttribute('class','choicedisplay-computer');
    }
    if(userChoice==="ROCK"){
        rockChoiceUser.setAttribute('class','display');
    }else if(userChoice ==="SCISSOR"){
        scissorChoiceUser.setAttribute('class','display');
    }else if(userChoice === "PAPER"){
        paperChoiceUser.setAttribute('class','display');
    }else{questionmarkUser.setAttribute('class','display');

    }
    if(computerChoice==="ROCK"){
        rockChoiceComputer.setAttribute('class','display-computer');
    }else if(computerChoice ==="SCISSOR"){
        scissorChoiceComputer.setAttribute('class','display-computer');
    }else if(computerChoice === "PAPER"){
        paperChoiceComputer.setAttribute('class','display-computer');
    }else(questionmarkComputer.setAttribute('class','display-computer'));
}
function Rock(){
    if(computerChoice === "ROCK"){
        remarks.innerText =("It's a DRAW! ");
        userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
        computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
    }else if(computerChoice === "PAPER"){
        computerPoints = computerPoints+2;
        remarks.innerText =("You Human don't stand a chance Against Me! ");
        userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
        computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
    }else if(computerChoice === "SCISSOR"){
        userPoints = userPoints+2;
        remarks.innerText =("You LOST! ");
        userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
        computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
    }else{remarks.innerText =("Wrong Input ");}
}
function Paper(){
    if(computerChoice === "PAPER"){
        remarks.innerText =("It's a DRAW! ");
        userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
        computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
    }else if(computerChoice=== "SCISSOR"){
        computerPoints = computerPoints+2;
        remarks.innerText =("It's a WIN ! ");
        userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
        computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
    }else if(computerChoice === "ROCK"){
        userPoints = userPoints+2;
        remarks.innerText =("You LOST! ");
        userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
        computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
    }else{remarks.innerText =("wrong Input ");}
}
function Scissor(){
    if(computerChoice === "SCISSOR"){
        remarks.innerText =("It's a DRAW! ");
        userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
        computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
    }else if(computerChoice === "ROCK"){
        computerPoints = computerPoints+2;
        remarks.innerText =("It's a WIN ! ");
        userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
        computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
    }else if(computerChoice === "PAPER"){
        userPoints = userPoints+2;
        remarks.innerText =("You LOST! ");
        userPointsDisplay.innerText = (`${userName} : ${userPoints}`);
        computerPointsDisplay.innerText = (`phoneix_QX3 : ${computerPoints}`);
    }else{remarks.innerText =("wrong Input ");}
}

rock.addEventListener('click', function(e){
    userChoice = rock.getAttribute('id');
    getComputerChoice(choices);
    displayChoice();
    Rock();
    checkEndGame();
});
scissor.addEventListener('click', function(e){
    userChoice = scissor.getAttribute('id');
    getComputerChoice(choices);
    displayChoice();
    Scissor();
    checkEndGame();
});
paper.addEventListener('click', function(e){
    userChoice = paper.getAttribute('id');
    getComputerChoice(choices);
    displayChoice();
    Paper();
    checkEndGame();
});

