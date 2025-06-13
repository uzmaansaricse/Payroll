// Toggle Menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}




// main-banner-textslider
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
    setInterval(nextSlide, 5000);
});



// compnaies logo 
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("logoSlider");
    let logos = slider.innerHTML; 
    slider.innerHTML += logos;
    let scrollSpeed = 1; 
    let translateX = 0;

    function moveLogos() {
        translateX -= scrollSpeed;
        if (Math.abs(translateX) >= slider.scrollWidth / 2) {
            translateX = 0; 
        }
        slider.style.transform = `translateX(${translateX}px)`;
        requestAnimationFrame(moveLogos);
    }

    moveLogos();
});

