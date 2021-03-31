var timer = document.getElementById("timer");
var startbtn = document.getElementById("startbtn");
var quizContainer = document.getElementById("quiz");
var bttn = document.querySelectorAll("button");
var question1 = document.getElementById("q1");
var question2 = document.getElementById("q2");
var question3 = document.getElementById("q3");
var correctAns = document.querySelectorAll(".correct");
var wrongAns = document.querySelectorAll(".wrong");

var time = 60;
var winner = false;
var timeInterval;

//Clicking start button begins quiz
startbtn.addEventListener("click", startQuiz);

//function for starting quiz
function startQuiz() {
    winner = false;
    time = 60;
    startTime()
}

//function for winning the game
function gameWin() {

}

//function checking win
function winValid() {
    //finish if statement
    if (placeholder) {
        winner = true;
    }
}

//function for losing the game
function gameLoss() {

}

//event target listener to determine when quiz is complete
// when a button on question 1,2,3 and is clicked--> timer stops
quizContainer.addEventListener("click", function(event){
    var element = event.target;

    if(element.matches("button")) {
        
    }
})



//function for timer
function startTime() {
    timeInterval = setInterval(function() {
        time--;
        timer.textContent = "Time: " + time;
        if(time >= 0) {
            //if time runs out player loses
            if (time === 0) {
                clearInterval(timeInterval);
                //define function
                gameLoss();
                }
            //if player completes quiz before time runs out, they pass    
            if (winner && time > 0) {
                clearInterval(timeInterval);  
                gameWin();
            }

        }
    }, 1000)
}