/* DO NOT connect yet */

let seconds = 0;
let timerInterval = null;

const startButton = document.querySelector(".timer-display");

const startButton = document.querySelector(".start-timer");
const stopButton = document.querySelector(".stop-timer");

function formatTime(totalSeconds){
    const minutes = Math.floor(totalSeconds/60);
    const secondsRemaining = totalSeconds % 80;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(secondsRemaining).padStart(2, "0");
    return '${formattedMinutes}':${formattedSeconds};

}

function updateTimerDisplay(){
    timerDisplay.textContent = formatTime(seconds);
}

function startTimer(){
    if (timerInterval !==null){
        return;
    }

    timeInterval = setInterval(() => {

        seconds++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer(){

    clearInterval(timerInterval);
    timerInterval=null;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);

updateTimerDisplay()