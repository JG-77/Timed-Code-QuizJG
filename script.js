//variables pulled from html
var timer = document.getElementById("timer");
var startbtn = document.getElementById("startbtn");
var quizContainer = document.getElementById("quiz");
//delete button??
//var bttn = document.querySelectorAll("button");
var question1 = document.getElementById("q1");
var question2 = document.getElementById("q2");
var question3 = document.getElementById("q3");
var correctAns = document.querySelectorAll(".correct");
var wrongAns = document.querySelectorAll(".wrong");
var showAns1 = document.querySelector(".display1");
var showAns2 = document.querySelector(".display2");
var showAns3 = document.querySelector(".display3");
var yourScore = document.querySelector(".score");

//global variables
var time = 60;
var winner = false;
var timeInterval;
var answer1;
var answer2;
var answer3;

//Clicking start button begins quiz
startbtn.addEventListener("click", startQuiz);

//function for starting quiz
function startQuiz() {
    winner = false;
    time = 60;
    startTime(time);
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
        //console.log(winner);
    } else {
        winner = false;
        //console.log(winner);
    }
}

//function for losing the game
function gameLoss() {
    yourScore.textContent = "You Lose";
}

//event target listener to determine when quiz is complete
quizContainer.addEventListener("click", function(event){
    var element = event.target;

    if(element.matches("button")) {
    if(answer1 && answer2 && answer3 === true) {
        clearInterval(timeInterval);
        saveTime();
        winValid();
        timer.textContent = "Time: " + time;
    }
}
})

//event target listener for each question
question1.addEventListener("click", function(event){
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
})

//functions to show if answer is wrong or correct
function show1(incoming) {
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
    console.log(time);
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