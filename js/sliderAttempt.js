const leftButton = document.querySelector("#sliderLeft");
const rightButton = document.querySelector("#sliderRight");

let currIndex = 0;
let prevIndex = 0;

const gameCards = document.body.querySelectorAll(".gameCard");

function modulus(n, m) {
    return ((n % m) + m) % m;
}

function slideRight() {
    prevIndex = currIndex;
    currIndex = modulus(currIndex + 1, gameCards.length);
    renderCarousel(currIndex);
};

function slideLeft() {
    prevIndex = currIndex;
    currIndex = modulus(currIndex - 1, gameCards.length)
    renderCarousel(currIndex);
};

const cards = [
    {
        cardImage: "assets/images/yugioh.svg",
        titleImage: "assets/images/yugioh.webp",
    },
    {
        cardImage: "assets/images/magic.svg",
        titleImage: "assets/images/magic.webp",
    },
    {
        cardImage: "assets/images/pokemon.svg",
        titleImage: "assets/images/pokemon.webp",
    },

]

const cardContainer = document.querySelector(".footer-slider-cardContainer");

function removeChildren(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}

function createCard(titleImage, cardImage) {
    const cardEl = document.createElement("div")
    const cardImageEl = document.createElement("img")
    cardImageEl.src = cardImage;
    const titleImageEl = document.createElement("img")
    titleImageEl.src = titleImage;
    cardImageEl.style.width = "7rem"
    titleImageEl.style.width = "9rem"
    cardEl.classList.add("gameCard");
    cardEl.appendChild(cardImageEl);
    cardEl.appendChild(titleImageEl);
    return cardEl;
}

function renderCarousel(currIndex) {
    removeChildren(cardContainer);
    const displayCards = cards.slice(currIndex, modulus(currIndex + 3, cards.length + 1));
    // console.log(currIndex, modulus(currIndex + 3, cards.length));
    for (const card of displayCards) {
        cardContainer.appendChild(createCard(card.titleImage, card.cardImage));
    }
}

leftButton.addEventListener("click", slideLeft);
rightButton.addEventListener("click", slideRight);

renderCarousel(currIndex);


// cardContainer.innerHTML = "asfadssa";