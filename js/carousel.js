/////////////////////////////////////////////////
// VARIABLES
/////////////////////////////////////////////////

const slideDuration = 3000;
const carousel = document.querySelector(".carousel");
const bar = document.querySelector(".carousel-bar-fill");
const dots = document.querySelectorAll(".carousel-dot");
const slideImgs = [
"url(./media/slide-1.jpg)",
"url(./media/slide-2.jpg)",
"url(./media/slide-3.jpg)"
];
const totalSlides = dots.length;

let slideNum = 0;

/////////////////////////////////////////////////
// FUNCTIONS
/////////////////////////////////////////////////

function changeSlide() {
    carousel.style.backgroundImage = slideImgs[slideNum];
    dots.forEach(dot => dot.removeAttribute("id"));
    dots[slideNum].id = "active";
}

function nextSlide() {
    if (!((slideNum + 1) % totalSlides)) {
        slideNum = 0;
    } else slideNum++;
    changeSlide();
}

function previousSlide() {
    if (!slideNum) {
        slideNum = totalSlides - 1;
    } else slideNum--;
    changeSlide();
}

function resetTimer() {
    // restart carousel-bar animation
    bar.classList.remove("carousel-bar-fill");
    bar.offsetWidth;   // this property recomputes the document's style, effectively serving as a means to restart the animation
    bar.classList.add("carousel-bar-fill");

    // reset timer
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, slideDuration);
}

/////////////////////////////////////////////////
// EVENT LISTENERS
/////////////////////////////////////////////////

document.querySelector(".carousel-button-prev").addEventListener("click", () => {
    resetTimer();
    previousSlide();
});

document.querySelector(".carousel-button-next").addEventListener("click", () => {
    resetTimer();
    nextSlide();
});

dots.forEach((dot, i) => dot.addEventListener("click", () => {
    resetTimer();
    slideNum = i;
    changeSlide();
}))

/////////////////////////////////////////////////
// ON LOAD
/////////////////////////////////////////////////

// set timer
let slideTimer = setInterval(nextSlide, slideDuration);

// set slide bar animation duration
bar.style.animationDuration = (slideDuration / 1000) + "s";

// activate carousel
changeSlide();