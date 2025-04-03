let index = 0;

let slides = document.getElementsByClassName("slides");
let nextArrow = document.getElementById("next");

let previousArrow = document.getElementById("previous");
let names = Array.from({ length: slides.length }, (_, i) => `Chiikawa ${i + 1}`);
let place = document.getElementById("place");

let dotsContainer = document.getElementById("dots-container");

let dotArray = document.getElementsByClassName("dots");

function init() {
    for (i = 0; i < slides.length; i++) {
        let dot = document.createElement("span");
        dot.className = "dots";
        dotsContainer.appendChild(dot);
    }
}

function showSlides(x) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dotArray[i].className = "dots";
    }
    slides[index].style.display = "block";
    dotArray[index].className += " active-dot";
    place.textContent = names[index];
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    nextArrow.addEventListener('click', () => {
        index += 1;
        if (index >= slides.length) index = 0;
        showSlides(index);
    })

    previousArrow.addEventListener('click', () => {
        index -= 1;
        if (index < 0) index = slides.length - 1;
        showSlides(index);
    })
    dotArray[0].onclick = showSlides(1);
});