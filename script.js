var timer = document.getElementById("timer");
var startbtn = document.getElementById("startbtn");

var time = 60;

startbtn.addEventListener("click", function(){
    var timeInterval = setInterval(function(){
        time--;
        timer.textContent = "Time: " + time;
        if (time === 0)
            clearInterval(timeInterval);
    }, 1000)
})