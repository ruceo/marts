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
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
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

// Toggle Sidebar Menu
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

// Cursor Trail Effect
document.getElementById('prepage').addEventListener('mousemove', function(e) {
    const spark = document.createElement('div');
    spark.className = 'cursor-trail';
    spark.style.left = `${e.pageX}px`;
    spark.style.top = `${e.pageY}px`;
    document.getElementById('prepage').appendChild(spark);
    setTimeout(() => {
        spark.remove();
    }, 1000); // Remove spark after 1 second
});

// Add Stars to the Background
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    document.querySelector('.starry-bg').appendChild(star);

    // Remove star after a random time to create a twinkling effect
    setTimeout(() => {
        star.remove();
    }, Math.random() * 3000 + 3000); // Between 3 and 6 seconds
}

// Create multiple stars
for (let i = 0; i < 100; i++) {
    createStar();
}

// Continuously create stars
setInterval(createStar, 100);

// Function to load different sections
function loadPage(page) {
    document.querySelectorAll('main > section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(page).style.display = 'block';
}

// Password Logic
const correctPassword = "2229"; // Set your desired password here

function enterDigit(digit) {
    const passwordInput = document.getElementById("password");
    passwordInput.value += digit;
}

function clearPassword() {
    document.getElementById("password").value = "";
}

function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    if (passwordInput === correctPassword) {
        alert("Contraseña correcta. Ganaste. Pero no te emociones… estaba planeado para que lo adivinaras.");
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}
