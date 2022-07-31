let slideNum = 0;

const carousel = document.getElementById("carousel");
const dots = Array.from(document.querySelectorAll(".carousel-dot"));
const cx = getComputedStyle(carousel).backgroundImage;/*getComputedStyle(carousel).background;*/
const bgImage = ["url(./media/slide-1.jpg)", "url(./media/slide-2.jpg)", "url(./media/slide-3.jpg)"];
const bgPositionX = ["100%", "50%", "0%"];
const bgColor = ["#eee", "#000", "#ff0000"];

nextSlide();

function nextSlide() {

    if (slideNum < dots.length) {
        slideNum++;
    }
    else {
        slideNum = 1;
    }
    carousel.style.backgroundImage = bgImage[slideNum - 1];
    /*alert(slideNum);*/
    dots[slideNum - 1].style.backgroundColor = "#943f42";
    if (slideNum >= 2) {
        dots[slideNum - 2].removeAttribute("style");
    }
    else {
        if (dots[dots.length - 1].hasAttribute("style")) {
            dots[dots.length - 1].removeAttribute("style");
        }
    }
}

function previousSlide() {
    if (slideNum > 1) {
        slideNum--;
    }
    else {
        slideNum = 3;
    }
    alert(slideNum);
    for (let i = 0; i < dots.length; i++)
    {
        if (dots[slideNum - 1])
        {
            dots[slideNum - 1].style.backgroundColor = "#943f42";
        }
        else {
            if (dots[i].hasAttribute("style"))
            {
                dots[i].removeAttribute("style");
            }
        }
    }
    /*
    if (slideNum < 2) {
        dots[slideNum - 2].removeAttribute("style");
    }
    else {
        if (dots[dots.length - 1].hasAttribute("style")) {
            dots[dots.length - 1].removeAttribute("style");
        }
    }*/
}

/*
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
function currentSlide(n) {
showSlides(slideIndex = n);
}
  
function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}

let slideIndex = 1;
showSlides(slideIndex);
*/