//variables pulled from html
var timer = document.getElementById("timer");
var startcont= document.getElementById("start-screen");
var startbtn = document.getElementById("startbtn");
var quizContainer = document.getElementById("quiz");
var questionDisplay = document.getElementById("question");
var AnsChoiceCont = document.getElementById("choice");
var rightOrWrong = document.getElementById("right-wrong");
var scoreCont= document.getElementById("scoreboard");
var highscoreCont= document.getElementById("highscore");
var link = document.getElementById("viewhs");
var yourScore = document.querySelector(".score");
var submitInitials = document.querySelector("#submitScore");
var initialInput = document.querySelector("#initials");
var backBttn = document.querySelector("#back");
var clearScore = document.querySelector("#clear");

//global variables
var time = 60;
var timeInterval;
var questionIndex = 0;

var quizArray = [
    {
        q: "Which of the following elements is non-semantic?",
        answerChoices: [
            "1. <section>",
            "2. <div>",
            "3. <nav>",
            "4. <h1>"
        ],
        answer: "2. <div>" 
    }, {
        q: "Which element typically goes at the bottom of an html page?",
        answerChoices: [
            "1. <h1>",
            "2. <header>",
            "3. <footer>",
            "4. <head>"
        ],
        answer: "3. <footer>" 
    }, {
        q: "Which coding language allows one to use the 'console.log' function?",
        answerChoices: [
            "1. Javascript",
            "2. CSS",
            "3. HTML",
            "4. None of the above"
        ],
        answer: "1. Javascript",
    }
]

//Clicking start button begins quiz
startbtn.addEventListener("click", startQuiz);

//function for starting quiz
function startQuiz() {
    winner = false;
    time = 60;
    startTime(time);
    displayQuiz();
    startcont.setAttribute("class", "no-display");
    quizContainer.setAttribute("class", "show-display");
}

//displays quiz questions and answer choices
function displayQuiz() {
    questionDisplay.textContent = quizArray[questionIndex].q;
    AnsChoiceCont.innerHTML = "";
    for (var i = 0; i < quizArray[questionIndex].answerChoices.length; i++) {
        var choiceBtn = document.createElement('button');
        choiceBtn.textContent = quizArray[questionIndex].answerChoices[i];
        AnsChoiceCont.append(choiceBtn);
        choiceBtn.addEventListener("click", answerValid);
    }
}

//function for timer
function startTime() {
    timeInterval = setInterval(function() {
        time--;
        timer.textContent = "Time: " + time;
        if(time >= 0) {
            //if time runs out player loses
            if (time <= 0) {
                clearInterval(timeInterval);
                gameLoss();
            }
        }
    }, 1000)
}

//informs player if answer is correct or wrong
function answerValid() {
    if(this.textContent === quizArray[questionIndex].answer) {
        rightOrWrong.innerHTML = "Correct!"
    }
    else if(this.textContent !== quizArray[questionIndex].answer) {
        rightOrWrong.innerHTML = "Wrong!";
        time = time - 10;
    }
    questionIndex++;
    if(questionIndex > 2) {
        clearInterval(timeInterval);
        quizContainer.setAttribute("class", "no-display");
        scoreCont.setAttribute("class", "show-display");
        winValid(); //????
        saveInitials(); //?????????????????
    } else {
        displayQuiz();
    }
    saveTime();
    timer.textContent = "Time: " + time;
}

//function for winning the game
function gameWin(time) {
    yourScore.textContent = "Your Score:" + time;
    saveTime();
    saveInitials();
}

//function for losing the game
function gameLoss() {
    yourScore.textContent = "You Lose";
}

//function checking win
function winValid() {
    if (time > 0) {
        gameWin(time);
    }
    else {
        gameLoss();
    }
}

//function to retrieve time
function saveTime() {
    localStorage.setItem("time", time);
}

//shows score and initial on screen
function showScore() {
    var hiScores = document.querySelector("#history");
    var getScore = localStorage.getItem("time", time);
    var initial = initialInput.value;
    hiScores.textContent = initial + "-" + getScore;
}
//event listener for submitting initials
submitInitials.addEventListener("click", saveInitials);

//function for saving initials -->bug
function saveInitials () {
    var initial = initialInput.value;
    if (initial === ""){
        yourScore.textContent = "Please enter your initials";
    } else {
        localStorage.setItem("initial", initial);
        showScore();
        scoreCont.setAttribute("class", "no-display");
        highscoreCont.setAttribute("class", "show-display");
    }
}

//event listener when clicking "clear highscore" button
clearScore.addEventListener("click", clear);

//function to clear highscores
function clear() {
    localStorage.removeItem("time", time);
    var initial = initialInput.value;
    localStorage.removeItem("initial", initial);
}

link.addEventListener("click", openScores)

function openScores() {
    if(highscoreCont.getAttribute("class") === "no-display") {
    highscoreCont.setAttribute("class", "show-display");
    } else {
        highscoreCont.setAttribute("class", "no-display");
    }
}

//back button even and function
backBttn.addEventListener("click", backGame);//still need more

function backGame() {
    window.location.reload();
}