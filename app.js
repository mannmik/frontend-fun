let userWins = 0;
let compWins = 0;

const rock_ = document.getElementById("rock");
const paper_ = document.getElementById("paper");
const scissors_ = document.getElementById("scissors");
const usrScore_ = document.getElementById("userScore");
const compScore_ = document.getElementById("compScore");
const scoreboard_ = document.querySelector(".scoreboard");
const result_ = document.querySelector(".result");



//---------------------------------------------------
// Gets a random computer choice 0, 1, or 2
// random choice maps to rock, paper, or scissors
// returns the computer's choice string
//----------------------------------------------------
function getCompChoice()
{
    var compChoices = ["rock", "paper", "scissors"];

    var randChoice = Math.floor(Math.random() * 3);

    return compChoices[randChoice];
}


//---------------------------------------------------
// Compares a user's choice of rock to the computer choice
// returns the result of that game of rock paper scissors
//----------------------------------------------------
function compareRockChoice(compChoice)
{
    var res 

    if (compChoice == "rock")
    {
        res = "It's a draw!";
    }
    else if(compChoice == "paper")
    {
        res = "Rock loses to Paper. You lose!";
        compWins += 1;
    }
    else
    {
        res = "Rock beats Scissors. You win!"
        userWins += 1;
    }

    return res;
}


//---------------------------------------------------
// Compares a user's choice of paper to the computer choice
// returns the result of that game of rock paper scissors
//----------------------------------------------------
function comparePaperChoice(compChoice)
{
    var res

    if(compChoice == "paper")
    {
        res = "It's a draw!";
    }
    else if(compChoice == "rock")
    {
        res = "Paper beats rock. You win!"
        userWins += 1;
    }
    else
    {
        res = "Paper loses to scissors. You lose!"
        compWins += 1;
    }

    return res;
}


//---------------------------------------------------
// Compares a user's choice of scissors to the computer choice
// returns the result of that game of rock paper scissors
//----------------------------------------------------
function compareScissorsChoice(compChoice)
{
    var res

    if(compChoice == "scissors")
    {
        res = "It's a draw!";
    }
    else if(compChoice == "paper")
    {
        res = "Scissors beats paper. You win!"
        userWins += 1;
        // console.log(userWins);
    }
    else
    {
        res = "Scissors loses to rock. You lose!"
        compWins += 1;
        // console.log(compWins);
    }

    return res;
}


//---------------------------------------------------
// function to compare user and comp choices
// maps what the user played to the correct comparison function
// returns the result of that correct comparison
//----------------------------------------------------
function compareChoices(usrChoice, compChoice)
{
    var res 

    if (usrChoice == "rock")
    {
        res = compareRockChoice(compChoice);
    }
    else if(usrChoice == "paper")
    {
        res = comparePaperChoice(compChoice);
    }
    else
    {
        res = compareScissorsChoice(compChoice);
    }

    return res;
}



//---------------------------------------------------
// function takes in the user's choice
// gets the random computer choice
// calls function to compare the two choices
// returns the result of that comparison
//----------------------------------------------------
function game(usrChoice)
{
    var compChoice = getCompChoice();
    // console.log(compChoice);
    var result = compareChoices(usrChoice, compChoice);
    

    return result;
}


//---------------------------------------------------
// function to be ran when user clicks on rock
//----------------------------------------------------
rock.onclick = function () {
    var gameResult = game("rock");
    console.log("rock");
    // console.log(compChoice);
    // compareChoices("rock", compChoice);
    result_.firstElementChild.textContent = gameResult;
    usrScore_.textContent = userWins;
    compScore_.textContent = compWins;
}


//---------------------------------------------------
// function to be ran when user clicks on paper
//----------------------------------------------------
paper.onclick = function () {
    var gameResult = game("paper");
    // console.log("paper");

    result_.firstElementChild.textContent = gameResult;
    usrScore_.textContent = userWins;
    compScore_.textContent = compWins;
}


//---------------------------------------------------
// function to be ran when user clicks on scissors
//----------------------------------------------------
scissors.onclick = function () {
    var gameResult = game("scissors");
    // console.log("scissors");

    result_.firstElementChild.textContent = gameResult;
    usrScore_.textContent = userWins;
    compScore_.textContent = compWins;
}