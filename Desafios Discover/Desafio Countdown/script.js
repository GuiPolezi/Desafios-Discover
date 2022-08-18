const daysE1 = document.getElementById("dias");
const hoursE1 = document.getElementById("horas");
const minutesE1 = document.getElementById("minutos");
const secondsE1 = document.getElementById("segundos");

const launchWebSite = "20 nov 2022";

function countDown () {
    const launchWebSiteDate = new Date(launchWebSite);
    const currentData = new Date();

    const totalSeconds = (launchWebSiteDate - currentData) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24); 
    const hour = Math.floor(totalSeconds / 3600) % 24;
    const min = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    

    daysE1.innerHTML = days;
    hoursE1.innerHTML =  formatTIme(hour);
    minutesE1.innerHTML = formatTIme(min);
    secondsE1.innerHTML = formatTIme(seconds);

    

}



function formatTIme(time) {
    return time < 10 ? `0${time}` : time;
}

countDown();



setInterval(countDown, 1000)
