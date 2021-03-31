var timer = document.getElementById("timer");
var startbtn = document.getElementById("startbtn");

var time = 60;
var winValid = false;

//Clicking start button begins quiz
startbtn.addEventListener("click", startQuiz);

//function for starting quiz
function startQuiz() {
    winValid = false;
    time = 60;
    startTime()
}

//function for winning the game
function gameWin() {

}

//function for timer
function startTime() {
    var timeInterval = setInterval(function() {
        time--;
        timer.textContent = "Time: " + time;
        if (time === 0)
            clearInterval(timeInterval);
            //define function
            loseGame();
``
    }, 1000)
}