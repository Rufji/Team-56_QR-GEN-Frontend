"strict mode";


const toggleMenu = document.querySelector(".toggle_menu");
const img = document.createElement("img");
img.src

toggleMenu.addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.toggle("active");
    toggleMenu.children.item(0).classList.toggle("show")
    toggleMenu.children.item(1).classList.toggle("show")
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail/dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("share");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "";
        // slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
const HeaderLogo = document.querySelector(".header-logo");
const registerBtn = document.querySelectorAll(".register_btn")
const loginBtn = document.querySelectorAll(".login_btn");
const demoBtn = document.querySelector(".demo_btn");
const staticBtn = document.querySelector(".static_btn")
const dynamicBtn = document.querySelector(".dynamic_btn")

HeaderLogo.addEventListener("click", ()=>{
  window.location.href = "index.html"
})

registerBtn.forEach(btn => {
    btn.addEventListener("click", ()=>{
        window.location.href = "sign-up.html"
    })
})

loginBtn.forEach(btn => {
    btn.addEventListener("click", ()=>{
        window.location.href = "sign-in.html"
    })
})

demoBtn.addEventListener("click", ()=>{
    window.location.href = "demo.html"
})
staticBtn.addEventListener("click", ()=>{
    window.location.href = "staticqr.html"
})
dynamicBtn.addEventListener("click", ()=>{
    window.location.href = "dynamicqr.html"
})