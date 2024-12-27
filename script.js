// Set the date we started dating
const startDate = new Date("2022-08-29T00:00:00");

// Update the count down every 1 second
setInterval(function () {
    const now = new Date().getTime();
    const distance = now - startDate.getTime();

    // Time calculations for years, days, hours, minutes, and seconds
    const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="counter"
    document.getElementById("years").innerText = years;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);

// Slideshow
let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show the current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

// Automatic slideshow
setInterval(() => {
    plusSlides(1); // Automatically move to the next slide every 3 seconds
}, 3000);

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
    } else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
    }
}

// Enter Site
function enterSite() {
    const prepage = document.getElementById("prepage");
    prepage.classList.add("hidden");
    setTimeout(() => { prepage.style.display = "none"; }, 1000); // Hide after transition
}
