const body = document.querySelector("body");

const IMAGE_CNT = 3;
const BG_CN = "bgImage";

function paintImage(randomNumber){
    const img = document.createElement('img');
    img.src = `./images/background/${randomNumber + 1}.jpg`;
    img.classList.add(BG_CN);
    body.appendChild(img);
}

function getRandomNumber(){
    const randomNumber = Math.floor(Math.random() * IMAGE_CNT);
    return randomNumber;
}

function init(){
    const randomNumber = getRandomNumber();
    paintImage(randomNumber);
}

init();