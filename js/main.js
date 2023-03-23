var s, t; s = document.createElement("script"); s.type = "text/javascript";
s.src = "//cdn.dayspedia.com/js/dwidget.min.v8ec261ff.js";
t = document.getElementsByTagName('script')[0]; t.parentNode.insertBefore(s, t);
s.onload = function() {
    window.dwidget = new window.DigitClock();
    window.dwidget.init("dayspedia_widget_5a1b3c9415f7a558");
};

const home = document.getElementById("home--js");
const weer = document.getElementById("weer--js");
const licht = document.getElementById("licht--js");
const temperatuur = document.getElementById("temperatuur--js");

const main = document.getElementById("main--js");
const weerScreen = document.getElementById("weerScreen--js");
const lichtScreen = document.getElementById("lichtScreen--js");
const temperatuurScreen = document.getElementById("temperatuurScreen--js");

weer.onclick = function( ) {
    main.style.display = "none";
    temperatuurScreen.style.display = "none";
    lichtScreen.style.display = "none";
    weerScreen.style.display = "flex";
    weer.style.background = "#FFFFFF";
    home.style.background = "#57F2D7";
    temperatuur.style.background = "#E66666";
    licht.style.background = "#ECD76D";
}

home.onclick = function( ) {
    main.style.display = "flex";
    weerScreen.style.display = "none";
    lichtScreen.style.display = "none";
    temperatuurScreen.style.display = "none";
    weer.style.background = "#4FDFF0";
    home.style.background = "#FFFFFF";
    temperatuur.style.background = "#E66666";
    licht.style.background = "#ECD76D";
}

licht.onclick = function( ) {
    lichtScreen.style.display = "flex";
    weerScreen.style.display = "none";
    main.style.display = "none";
    temperatuurScreen.style.display = "none";
    weer.style.background = "#4FDFF0";
    home.style.background = "#57F2D7";
    temperatuur.style.background = "#E66666";
    licht.style.background = "#FFFFFF";
}

temperatuur.onclick = function( ) {
    temperatuurScreen.style.display = "flex";
    weerScreen.style.display = "none";
    lichtScreen.style.display = "none";
    main.style.display = "none";
    weer.style.background = "#4FDFF0";
    home.style.background = "#57F2D7";
    temperatuur.style.background = "#FFFFFF";
    licht.style.background = "#ECD76D";
}