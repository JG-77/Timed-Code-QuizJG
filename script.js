var timer = document.getElementById("timer");
var startbtn = document.getElementById("startbtn");

var time = 60;

//Clicking start button begins timer
startbtn.addEventListener("click", startTime);

//function for timer
function startTime() {
    var timeInterval = setInterval(function() {
        time--;
        timer.textContent = "Time: " + time;
        if (time === 0)
            clearInterval(timeInterval);
    }, 1000)
}