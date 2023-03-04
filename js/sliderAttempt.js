const leftButton = document.querySelector("#sliderLeft");
const rightButton = document.querySelector("#sliderRight");

function slideRight() {
    let gameCards = document.body.querySelectorAll(".gameCard");
    gameCards[4].classList.add("gameCard__shrunk");
    setTimeout(() => {document.querySelector(".footer-slider-cardContainer").prepend(gameCards[4])}, 500);
    setTimeout(() => {gameCards[4].classList.remove("gameCard__shrunk")}, 550);
};

function slideLeft() {
    let gameCards = document.body.querySelectorAll(".gameCard");
    gameCards[0].classList.add("gameCard__shrunk");
    setTimeout(() => {document.querySelector(".footer-slider-cardContainer").append(gameCards[0])}, 500);
    setTimeout(() => {gameCards[0].classList.remove("gameCard__shrunk")}, 550);
};


leftButton.addEventListener("click", slideLeft);
rightButton.addEventListener("click", slideRight);


