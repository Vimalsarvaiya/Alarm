let alarmTime = null;
let alarmTimeout = null;
let alarm = new Audio("loud.mp3");


function setAlarm() {
    const inputTime = document.getElementById("alarmTime").value;
    if (inputTime) {
        alarmTime = new Date(inputTime).getTime();
        document.getElementById("alarmMessage").innerText = "Alarm set!";
        checkAlarm();
    } else {
        alert("Please set a valid date and time!");
    }
}

function checkAlarm() {
    clearInterval(alarmTimeout); // clear previous interval if any
    alarmTimeout = setInterval(() => {
        const currentTime = new Date().getTime();
        if (alarmTime && currentTime >= alarmTime) {
           
setInterval(() => {
    alarm.play(); 
}, 1) 
            document.getElementById("alarmMessage").innerText = "Alarm ringing!";
            clearInterval(alarmTimeout); // stop checking after alarm rings
        }
    }, 1000);
}

function updateCurrentTime() {
    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById("currentTime").innerText = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}

updateCurrentTime(); // start updating the current time
