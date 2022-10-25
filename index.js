let newHours = document.getElementById('hour');
let newMinutes = document.getElementById('minute');
let newSeconds = document.getElementById('second');
let amPM = document.getElementById('ampm');





function digitalTime() {
    let currentHour = new Date().getHours();
    console.log(currentHour);
    let currentMinute = new Date().getMinutes();
    console.log(currentMinute);
    let currentSecond = new Date().getSeconds();
    console.log(currentSecond);


    if (currentHour > 12){
        h = h - 12;
        amPM = "PM";
    }

    newHours.innerText = currentHour;
    newMinutes.innerText = currentMinute;
    newSeconds.innerText = currentSecond;
    setTimeout(digitalTime, 1000)

}

digitalTime()