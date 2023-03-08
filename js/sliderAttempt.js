const leftButton = document.querySelector("#sliderLeft");
const rightButton = document.querySelector("#sliderRight");

let currIndex = 0;
let prevIndex = 0;

function modulus(n, m) {
    return ((n % m) + m) % m;
}

function slideRight() {
    prevIndex = currIndex;
    currIndex = modulus(currIndex + 1, cards.length);
    renderCarousel(currIndex);
};

function slideLeft() {
    prevIndex = currIndex;
    currIndex = modulus(currIndex - 1, cards.length)
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
    {
        cardImage: "assets/images/fab.svg",
        titleImage: "assets/images/fab.webp",
    },
    {
        cardImage: "assets/images/funko.svg",
        titleImage: "assets/images/funko.webp",
    },
    {
        cardImage: "assets/images/forceofwill.svg",
        titleImage: "assets/images/forceofwill.webp",
    },
    {
        cardImage: "assets/images/vanguard.svg",
        titleImage: "assets/images/vanguard.webp",
    },
    {
        cardImage: "assets/images/gateruler.svg",
        titleImage: "assets/images/gateruler.webp",
    },
    {
        cardImage: "assets/images/mha.svg",
        titleImage: "assets/images/mha.webp",
    },
    {
        cardImage: "assets/images/metazoo.svg",
        titleImage: "assets/images/metazoo.webp",
    },
    {
        cardImage: "assets/images/dbz.svg",
        titleImage: "assets/images/dbz.webp",
    },
    {
        cardImage: "assets/images/ff.svg",
        titleImage: "assets/images/ff.webp",
    },
    {
        cardImage: "assets/images/digimon.svg",
        titleImage: "assets/images/digimon.webp",
    },
]

const cardContainer = document.querySelector(".footer-slider-cardContainer");

function removeChildren(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}

function createCard(cardImage, titleImage) {
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
    // ISSUE: currIndex == 12 | 11 when sliding left, .slice returns empty
    // console.log(currIndex, modulus(currIndex + 3, cards.length + 1));
    for (const card of displayCards) {
        cardContainer.appendChild(createCard(card.cardImage, card.titleImage));
    }
}

leftButton.addEventListener("click", slideLeft);
rightButton.addEventListener("click", slideRight);

renderCarousel(currIndex);