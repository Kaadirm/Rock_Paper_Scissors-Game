let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"]
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}
function win(userChoice, computerChoice){
    const userChoice_div =  document.getElementById(userChoice)
    userScore++;
    userScore_span.textContent = userScore;
    result_div.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}
function lose(userChoice, computerChoice){
    const userChoice_div =  document.getElementById(userChoice)
    computerScore++;
    compScore_span.textContent = computerScore;
    result_div.innerHTML = `${computerChoice} beats ${userChoice}. You lose!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}
function draw(userChoice, computerChoice){
    const userChoice_div =  document.getElementById(userChoice)
    result_div.innerHTML = `It's a draw!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(()=> userChoice_div.classList.remove('gray-glow'), 300);
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "ScissorsRock":
        case "PaperScissors":
            lose(userChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice, computerChoice);
            break;
    }
}
function main(){
    rock_div.addEventListener("click", () =>
        game("Rock"));
    paper_div.addEventListener("click", () =>
        game("Paper"));
    scissors_div.addEventListener("click", () =>
        game("Scissors"));
}
main()
