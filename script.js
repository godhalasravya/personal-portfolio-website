// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been submitted."
    );

    contactForm.reset();
});


// =========================
// PROJECT BUTTONS
// =========================

const projectButtons =
    document.querySelectorAll(".project-btn");

projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("Project details will be added soon!");

    });

});
