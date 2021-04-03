//variables pulled from html
var timer = document.getElementById("timer");
var startbtn = document.getElementById("startbtn");
var quizContainer = document.getElementById("quiz");
var questionDisplay = document.getElementById("question");
var AnsChoiceCont = document.getElementById("choice");
var rightOrWrong = document.getElementById("right-wrong");
var yourScore = document.querySelector(".score");
var submitInitials = document.querySelector("#submitScore");
var initialInput = document.querySelector("#initials");
var backBttn = document.querySelector("#back");
var clearScore = document.querySelector("#clear");

//global variables
var time = 60;
var winner = false;
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

function displayQuiz() {
    questionDisplay.textContent = quizArray[questionIndex].q;
    AnsChoiceCont.innerHTML = "";
    for (var i = 0; i < quizArray[questionIndex].answerChoices.length; i++) {
        var choiceBtn = document.createElement('button');
        choiceBtn.textContent = quizArray[questionIndex].answerChoices[i];
        AnsChoiceCont.append(choiceBtn);
        //answerValid();
    }
}

function answerValid() {
    if(answerChoices === answer) {
    show("Correct!");
    }
    else if (answerChoices !== answer) {
        show("Wrong!")
    }
}

//Clicking start button begins quiz
startbtn.addEventListener("click", startQuiz);

//function for starting quiz
function startQuiz() {
    winner = false;
    time = 60;
    startTime(time);
    displayQuiz();
}

//function for winning the game
function gameWin(time) {
    yourScore.textContent = "Your Score:" + time;
    saveTime();
}

//function checking win
function winValid() {
    if (time > 0) {
        winner = true;
        gameWin(time);
    }
    else {
        winner = false;
    }
}

//function for losing the game
function gameLoss() {
    yourScore.textContent = "You Lose";
}


//functions to show if answer is wrong or correct
function show() {
    rightOrWrong.textContent = incoming;
}

/*function show1(incoming) {
    showAns1.textContent = incoming;
}

function show2(incoming) {
    showAns2.textContent = incoming;
}

function show3(incoming) {
    showAns3.textContent = incoming;
}

//function to retrieve time
function saveTime() {
    localStorage.setItem("time", time);
}*/

//function for storagelog get item & submit initials


function showScore() {
    var hiScores = document.querySelector("#history");
    var getScore = localStorage.getItem("time", time);
    var initial = initialInput.value;
    console.log(getScore);
    hiScores.textContent = initial + "-" + getScore;
}
//event listener for submitting initials
submitInitials.addEventListener("click", function(event) {
    event.preventDefault();
    var initial = initialInput.value;
    if (initial === ""){
        yourScore.textContent = "Please enter your initials";
    } else {
        localStorage.setItem("initial", initial);
        showScore();
        console.log(initial);
    }
})


//event listener when clicking "clear highscore" button
clearScore.addEventListener("click", clear);

//function to clear highscores
function clear() {
    localStorage.removeItem("time", time);
    var initial = initialInput.value;
    localStorage.removeItem("initial", initial);
}

//init() function for page refresh
function init() {
    showScore();
}

init();

backBttn.addEventListener("click", );//still need more


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
//var answer1;
//var answer2;
//var answer3;
//event target listener to determine when quiz is complete
/*quizContainer.addEventListener("click", function(event){
    var element = event.target;
    
    if(element.matches("button")) {
        if(answer1 && answer2 && answer3 === true) {
            clearInterval(timeInterval);
            saveTime();
            winValid();
            timer.textContent = "Time: " + time;
        }
    }
}) */

//event target listener for each question
/*question1.addEventListener("click", function(event){
    var element = event.target;
    
    if(element.matches("button")) {
        answer1 = true;
        var answerIs = element.getAttribute("class");
        if(answerIs === "correct") {
            show1("Correct!");
        }
        if(answerIs === "wrong") {
            show1("Wrong!");
            time = time - 10;
        }
    }
})

question2.addEventListener("click", function(event){
    var element = event.target;
    
    if(element.matches("button")) {
        answer2 = true;
        var answerIs = element.getAttribute("class");
        if(answerIs === "correct") {
            show2("Correct!");
        }
        if(answerIs === "wrong") {
            show2("Wrong!");
            time = time - 10;
        }
    }
})

question3.addEventListener("click", function(event){
    var element = event.target;
    
    if(element.matches("button")) {
        answer3 = true;
        var answerIs = element.getAttribute("class");
        if(answerIs === "correct") {
            show3("Correct!");
        }
        if(answerIs === "wrong") {
            show3("Wrong!");
            time = time - 10;
        }
    }
}) */
/*var question1 = document.getElementById("q1");
var question2 = document.getElementById("q2");
var question3 = document.getElementById("q3");
var correctAns = document.querySelectorAll(".correct");
var wrongAns = document.querySelectorAll(".wrong");
var showAns1 = document.querySelector(".display1");
var showAns2 = document.querySelector(".display2");
var showAns3 = document.querySelector(".display3"); */
/*//function for screen display
function sectionChange() {
    var sections = document.querySelectorAll("section");
    
    if (sections[0].style.display === "block") {
        sections[1].style.display === "none";
        sections[2].style.display === "none";
        sections[3].style.display === "none";
        sections[4].style.display === "none";
        sections[5].style.display === "none";
        if (startbtn === true) {
            sections[1].style.display === "block"; 
        }
    }
}*/