const weaponsContainer = document.querySelector('#weapons-container')
const choices = ["ROCK", "PAPER", "SCISSOR"];
weaponsContainer.addEventListener('click', function(event){

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
    });