// JavaScript Document
var darkModeButton = document.querySelector(".darkmodebutton");
var bodyElement = document.querySelector("body");
var knopNieuwsMenu = document.querySelector(".NieuwsPaginaKnop");
var nieuwsPaginaMenu = document.querySelector(".NieuwsPaginaMenu");
var getal = 0;

function darkLightMode() {
    bodyElement.classList.toggle("darkmode");

    if (getal == 1) {
        document.getElementById("lightdarkmodeimage").src = "images/darkmode.png";
        getal = 0;
    } else {
        document.getElementById("lightdarkmodeimage").src = "images/lightmode.png";
        getal = 1;
    };
};

darkModeButton.addEventListener("click", darkLightMode);

function hamburgerMenuNieuws() {
    nieuwsPaginaMenu.classList.toggle("NieuwsPaginaMenuOpen");
}

knopNieuwsMenu.addEventListener("click", hamburgerMenuNieuws);