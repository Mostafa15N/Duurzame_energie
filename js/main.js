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

const home2 = document.getElementById("home2--js");
const weer2 = document.getElementById("weer2--js");
const licht2 = document.getElementById("licht2--js");
const temperatuur2 = document.getElementById("temperatuur2--js");

const main = document.getElementById("main--js");
const weerScreen = document.getElementById("weerScreen--js");
const lichtScreen = document.getElementById("lichtScreen--js");
const temperatuurScreen = document.getElementById("temperatuurScreen--js");

weer.onclick = function( ) {
    main.style.display = "none";
    temperatuurScreen.style.display = "none";
    lichtScreen.style.display = "none";
    weerScreen.style.display = "flex";
    weer.style.background = "var(--color-main)";
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
    home.style.background = "var(--color-main)";
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
    licht.style.background = "var(--color-main)";
}

temperatuur.onclick = function( ) {
    temperatuurScreen.style.display = "flex";
    weerScreen.style.display = "none";
    lichtScreen.style.display = "none";
    main.style.display = "none";
    weer.style.background = "#4FDFF0";
    home.style.background = "#57F2D7";
    temperatuur.style.background = "var(--color-main)";
    licht.style.background = "#ECD76D";
}
weer2.onclick = function( ) {
    main.style.display = "none";
    temperatuurScreen.style.display = "none";
    lichtScreen.style.display = "none";
    weerScreen.style.display = "flex";
    weer2.style.background = "var(--color-main)";
    home2.style.background = "#57F2D7";
    temperatuur2.style.background = "#E66666";
    licht2.style.background = "#ECD76D";
}

home2.onclick = function( ) {
    main.style.display = "flex";
    weerScreen.style.display = "none";
    lichtScreen.style.display = "none";
    temperatuurScreen.style.display = "none";
    weer2.style.background = "#4FDFF0";
    home2.style.background = "var(--color-main)";
    temperatuur2.style.background = "#E66666";
    licht2.style.background = "#ECD76D";
}

licht2.onclick = function( ) {
    lichtScreen.style.display = "flex";
    weerScreen.style.display = "none";
    main.style.display = "none";
    temperatuurScreen.style.display = "none";
    weer2.style.background = "#4FDFF0";
    home2.style.background = "#57F2D7";
    temperatuur2.style.background = "#E66666";
    licht2.style.background = "var(--color-main)";
}

temperatuur2.onclick = function( ) {
    temperatuurScreen.style.display = "flex";
    weerScreen.style.display = "none";
    lichtScreen.style.display = "none";
    main.style.display = "none";
    weer2.style.background = "#4FDFF0";
    home2.style.background = "#57F2D7";
    temperatuur2.style.background = "var(--color-main)";
    licht2.style.background = "#ECD76D";
}

const microwave = document.getElementById("microwave--js");
const oven = document.getElementById("oven--js");
const koelkast = document.getElementById("koelkast--js");
const tv = document.getElementById("tv--js");
const wasmachine = document.getElementById("wasmachine--js");
const overig = document.getElementById("overig--js");

const kw__microwave = document.getElementById("kw__microwave");
const kw__oven = document.getElementById("kw__oven");
const kw__koelkast = document.getElementById("kw__koelkast");
const kw__tv = document.getElementById("kw__tv");
const kw__wasmachine = document.getElementById("kw__wasmachine");
const kw__overig = document.getElementById("kw__overig");


const value1 = document.getElementById("value");
const value2 = document.getElementById("value1");
const value3 = document.getElementById("value2");
const value4 = document.getElementById("value3");

let data = fetch("../data.json").then(
    function(binnenGekomenData) {
        return binnenGekomenData.json();
    }).then(
        function(echteData){ 
            totaal = (echteData.microwave + echteData.oven + echteData.koelkast + echteData.tv + echteData.wasmachine + echteData.overig);
            console.log(totaal);
            microwave.style.width = .24*(100/totaal*echteData.microwave) + "rem";
            oven.style.width = .24*(100/totaal*echteData.oven) + "rem";
            koelkast.style.width = .24*(100/totaal*echteData.koelkast) + "rem";
            tv.style.width = .24*(100/totaal*echteData.tv) + "rem";
            wasmachine.style.width = .24*(100/totaal*echteData.wasmachine) + "rem";
            overig.style.width = .24*(100/totaal*echteData.overig) + "rem";

            kw__microwave.innerHTML = echteData.microwave+(" watt");
            kw__oven.innerHTML = echteData.oven+(" watt");
            kw__koelkast.innerHTML = echteData.koelkast+(" watt");
            kw__tv.innerHTML = echteData.tv+(" watt");
            kw__wasmachine.innerHTML = echteData.wasmachine+(" watt");
            kw__overig.innerHTML = echteData.overig+(" watt");

            value1.innerHTML = echteData.woonkamer;
            value2.innerHTML = echteData.keuken;
            value3.innerHTML = echteData.slaapkamer;
            value4.innerHTML = echteData.badkamer;

        }
    );



    /* hier begint de slider */
var slider = document.getElementById("myRange");
var output = document.getElementById("value")

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function(){
    var x =slider.value;
    var color = 'linear-gradient(90deg, rgb(255,255,135)' + x +'%, rgb(214,214,214)' + x + '%)';
    slider.style.background = color;
})

/* hier begint de slider1 */
var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("value1")

output1.innerHTML = slider1.value;

slider1.oninput = function() {
    output1.innerHTML = this.value;
}

slider1.addEventListener("mousemove", function(){
    var x =slider1.value;
    var color1 = 'linear-gradient(90deg, rgb(255,255,153)' + x +'%, rgb(214,214,214)' + x + '%)';
    slider1.style.background = color1;
})

/* hier begint de slider2 */
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("value2")

output2.innerHTML = slider2.value;

slider2.oninput = function() {
    output2.innerHTML = this.value;
}

slider2.addEventListener("mousemove", function(){
    var x =slider2.value;
    var color2 = 'linear-gradient(90deg, rgb(255,255,135)' + x +'%, rgb(214,214,214)' + x + '%)';
    slider2.style.background = color2;
})

/* hier begint de slider3 */
var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("value3")

output3.innerHTML = slider3.value;

slider3.oninput = function() {
    output3.innerHTML = this.value;
}

slider3.addEventListener("mousemove", function(){
    var x =slider3.value;
    var color3 = 'linear-gradient(90deg, rgb(255,255,135)' + x +'%, rgb(214,214,214)' + x + '%)';
    slider3.style.background = color3;
})




const temp = document.getElementById("temp")
const wolk = document.getElementById("wolk")
const opkomst = document.getElementById("op")
const ondergang = document.getElementById("onder")
const temp2 = document.getElementById("temp2")
const wind = document.getElementById("wind")
const richting = document.getElementById("richting")
const code = document.getElementById("code")
const weer__news = document.getElementById("weer__news")
let weer__js = document.getElementById("weer__js")

let tempcheck = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.25&longitude=5.75&hourly=temperature_2m&daily=sunrise,sunset&timezone=auto&current_weather=true")
.then(function(response){
   return response.json();
})
.then(function(realData){
    console.log(realData);
   temp.innerHTML= realData.current_weather.temperature+("°C");
   temp2.innerHTML= realData.current_weather.temperature+("°C");
   wind.innerHTML= realData.current_weather.windspeed+(" km/h");
   richting.innerHTML= realData.current_weather.winddirection+("°");
   code.innerHTML= realData.current_weather.weathercode;
   ondergang.innerHTML=realData.daily.sunset[0];
   opkomst.innerHTML=realData.daily.sunrise[0];

    if(realData.current_weather.weathercode >= 00 && realData.current_weather.weathercode <= 19){
        weer__js.src = "img/Naamloos-3.png";
    }
    else if(realData.current_weather.weathercode >= 79 && realData.current_weather.weathercode <= 99){
        weer__js.src= "img/thunderstorm_FILL0_wght400_GRAD0_opsz48.png";
    }

    else if(realData.current_weather.weathercode >= 19 && realData.current_weather.weathercode <= 30){
        weer__js.src= "img/cloudy_snowing_FILL0_wght400_GRAD0_opsz48.png";
    }

    else if(realData.current_weather.weathercode >= 29 && realData.current_weather.weathercode <= 40){
        weer__js.src= "img/air_FILL0_wght400_GRAD0_opsz48.png";
    }

    else if(realData.current_weather.weathercode >= 39 && realData.current_weather.weathercode <= 50){
        weer__js.src= "img/foggy_FILL0_wght400_GRAD0_opsz48.png";
    }

    else if(realData.current_weather.weathercode >= 49 && realData.current_weather.weathercode <= 60){
        weer__js.src= "img/rainy_light_FILL0_wght400_GRAD0_opsz48.png";
    }
    else if(realData.current_weather.weathercode >= 59 && realData.current_weather.weathercode <= 70){
        weer__js.src= "img/rainy_FILL0_wght400_GRAD0_opsz48.png";
    }

    else if(realData.current_weather.weathercode >= 69 && realData.current_weather.weathercode <= 80){
        weer__js.src= "img/cloudy_snowing_FILL0_wght400_GRAD0_opsz48.png";
    }
})

let tempcheck2 = fetch("https://weerlive.nl/api/json-data-10min.php?key=demo&locatie=Amsterdam")
.then(function(response){
    return response.json();
 })
 .then(function(realData){
     console.log(realData);
     wolk.innerHTML=realData.liveweer[0].image;
 })



 const labels = [
    'Licht',
    'Verwarming',
    'Verkoeling',
    'Water ', 
    'Overig',
 ];
 
 const data2 = {
   labels: labels,
   datasets:  [{
     label: "Energie verbruik",
     data: [1000, 500, 600, 1000, 400],
     backgroundColor: ['#ECD76D', '#E16E29', '#E66666', '#4DE1F2', '#57F2D7'],
   }]
   }
 
 const config = {
   type: 'pie',
   data: data2,
   borderAlign: 'inner',
 };
 
 new Chart(
   document.getElementById("js--chart--1"),
   config
 );

 const labelsenergy = [
    'microwave',
    'oven',
    'koelkast',
    'tv',
    'wasmachine',
 ];
 
 const data3 = {
   labels: labels,
   datasets:  [{
     label: "Energie verbruik apparaten",
     data: [800, 1400, 33, 35, 1000],
     backgroundColor: ['#ECD76D', '#E16E29', '#E66666', '#4DE1F2', '#57F2D7'],
   }]
   }
 
 const config2 = {
   type: 'bar',
   data: data3,
 };
 
 new Chart(
   document.getElementById("js--chart--2"),
   config2
 );



 //darkmode//
 


function toggle() {

    const darkmode = document.getElementById("toggle");

    if (darkmode.checked == true){
        console.log("ik werk")
    }
}