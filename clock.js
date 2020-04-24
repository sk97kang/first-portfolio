const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("#nowTime");

function getTime() {
    const date = new Date();
    const month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    
    day = day < 10 ? '0' + day : day;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    clockTitle.textContent = `${month}월 ${day}일 ${hours}:${minutes}:${seconds}`;
}
  
function init() {
    setInterval(getTime, 1000);
  }
  init();
  