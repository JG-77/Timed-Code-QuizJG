var timer = document.getElementById("timer");
var startbtn = document.getElementById("startbtn");
var bttn = document.querySelectorAll("button");

var time = 60;
var winner = false;

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
    if () {
        winner = true;
    }
}

//function for timer
function startTime() {
    var timeInterval = setInterval(function() {
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