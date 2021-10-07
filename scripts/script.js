// JavaScript Document
var haloweenDate = ('10-31')
var today = new Date();
var date = (today.getMonth() + 1) + '-' + today.getDate();
var darkModeButton = document.querySelector(".darkmodebutton");
var bodyElement = document.querySelector("body");
var knopNieuwsMenu = document.querySelector(".NieuwsPaginaKnop");
var nieuwsPaginaMenu = document.querySelector(".NieuwsPaginaMenu");
var knopSportMenu = document.querySelector(".SportPaginaKnop");
var sportPaginaMenu = document.querySelector(".SportPaginaMenu");
var svg3puntjes = document.querySelector(".driepuntmenu")
var getal = 0;
/* Haloween Mode.*/

function haloween() {
    if (haloweenDate == date) {
        bodyElement.classList.add("haloween");
    };
};

haloween();

function haloweenorNot() {

    if (haloweenDate == date) {
        darkLightModeHaloween();
    } else {
        normalDarkLightmode()
    };
};

/* Dark/light Mode.*/

function darkLightModeHaloween() {
    bodyElement.classList.toggle("darkmodeHaloween");
    sportPaginaMenu.classList.remove("SportPaginaMenuOpen");
    nieuwsPaginaMenu.classList.remove("NieuwsPaginaMenuOpen");

    if (getal == 1) {
        document.getElementById("lightdarkmodeimage").src = "images/darkmode.png";
        getal = 0;
    } else {
        document.getElementById("lightdarkmodeimage").src = "images/lightmode.png";
        getal = 1;
        /* lightmode.png is zelf gemaakt*/
    };
};

function normalDarkLightmode() {
    bodyElement.classList.toggle("darkmode");
    sportPaginaMenu.classList.remove("SportPaginaMenuOpen");
    nieuwsPaginaMenu.classList.remove("NieuwsPaginaMenuOpen");

    if (getal == 1) {
        document.getElementById("lightdarkmodeimage").src = "images/darkmode.png";
        getal = 0;
    } else {
        document.getElementById("lightdarkmodeimage").src = "images/lightmode.png";
        getal = 1;
    };
};

darkModeButton.addEventListener("click", haloweenorNot);

/* Hamburger Menu Nieuws.*/
function hamburgerMenuNieuwsOver() {
    nieuwsPaginaMenu.classList.add("NieuwsPaginaMenuOpen");
    sportPaginaMenu.classList.remove("SportPaginaMenuOpen");
}

knopNieuwsMenu.addEventListener(("mouseover", "click"), hamburgerMenuNieuwsOver);

function hamburgerMenuNieuwsOut() {
    nieuwsPaginaMenu.classList.remove("NieuwsPaginaMenuOpen");
}

knopNieuwsMenu.addEventListener("mouseout", hamburgerMenuNieuwsOut);
knopSportMenu.addEventListener("focusin", hamburgerMenuNieuwsOut);

/* Hamburger Menu Sport.*/
function hamburgerMenuSportOver() {
    sportPaginaMenu.classList.add("SportPaginaMenuOpen");
    nieuwsPaginaMenu.classList.remove("NieuwsPaginaMenuOpen");
}

knopSportMenu.addEventListener(("mouseover", "click"), hamburgerMenuSportOver);

function hamburgerMenuSportOut() {
    sportPaginaMenu.classList.remove("SportPaginaMenuOpen");
}

svg3puntjes.addEventListener("focusin", hamburgerMenuSportOut);
knopSportMenu.addEventListener("mouseout", hamburgerMenuSportOut);

console.log(haloweenDate);
console.log(date);