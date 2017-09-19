
// MENU BUTTON ---------------------

var hamburger = document.querySelector(".menu-icon");

hamburger.addEventListener("click", function () {
    document.querySelector(".side-bar").classList.toggle("opened");
    document.querySelector(".main").classList.toggle("opened");   
    
    document.querySelector(".menu-icon").classList.toggle("change");
    
}, false );
 
    function myFunction(x) {
        x.classList.toggle("change");
    }

// PRODUCT-BUTTONS -> MODAL BOX ---------------------

var openProduct = document.getElementsByClassName("butty");


for (var i = 0; i < openProduct.length; i++) {
    openProduct[i].addEventListener('click',redirect,false);
}
function redirect(){

    
    	document.querySelector(".product").classList.toggle("open");	document.querySelector(".modal").classList.toggle("open");
}

//stare

//openProduct.addEventListener("click", function() {
//	document.querySelector(".product").classList.toggle("open");	document.querySelector(".modal").classList.toggle("open");
//    
////    console.log(openProduct.length);
//	}, false);

// CLOCK ---------------------

//function renderTime () {
//    
//    var currentTime = new Date();
//    var today = currentTime.toDateString();
//    var time = currentTime.toLocaleTimeString();
//    var hours = currentTime.getHours();
//    var minutes = currentTime.getMinutes();
//    var seconds = currentTime.getSeconds();
//    var diem = "PM";
//    
//    if (hours == 0) {
//        hours = 12;
//    } else if (hours < 12) {
//        hours = hours - 12;
//        diem = "AM"
//    }
//    if (hours < 10) {
//        hours = "0" + hours;
//    }
//    if (minutes < 10) {
//        minutes = "0" + minutes;
//    }
//    if (seconds < 10) {
//        seconds = "0" + seconds;
//    }
//    
//    var clockDisplay = document.getElementById("clock");   
//    clockDisplay.innerHTML  = today + " " + time + " " + hours + ":" + minutes + ":" + seconds + " " + diem.fontsize(6);
//    
//   setInterval('renderTime()',1000);
//
//}
//renderTime();

// CLOCK 2  ---------------------

var clock = document.getElementById("canvasClock");
var ctx = clock.getContext("2d");
ctx.strokeStyle = '#fe1';
ctx.lineWidth = 1;
ctx.lineCap = 'round';
ctx.shadowBlur = '12';
ctx.shadowColor = 'rgba(255,255,255,1)';

function degToRad(degree) {
    var factor = Math.PI/180;
    return degree*factor;
}

function renderTime2() {
    
    var currentTime = new Date();
    var time = currentTime.toLocaleTimeString();
    var h = currentTime.getHours() + (currentTime.getMinutes()/60);
    var m = currentTime.getMinutes() + (currentTime.getSeconds()/60);
    var s = currentTime.getSeconds()+ (currentTime.getMilliseconds()/1000);
    
//    Background
    gradient = ctx.createRadialGradient(200, 200, 1, 200, 200, 190);
    gradient.addColorStop(0, '#191609');
    gradient.addColorStop(1, 'rgba(0,0,0,1');
    ctx.fillStyle = gradient;
//    ctx.fillStyle = 'rgba(0,0,0,.5)';
    ctx.fillRect(0,0,400,400);

    
//    Hours
    ctx.beginPath();
    ctx.arc(200, 200, 160, degToRad(270), degToRad((s*6)-90));
    ctx.stroke();
    
//    Minutes
    ctx.beginPath();
    ctx.arc(200, 200 , 140, degToRad(270), degToRad((m*6)-90));
    ctx.stroke();
    
//    Seconds
    ctx.beginPath();
    ctx.beginPath(); ctx.arc(200,200,120,degToRad(270),degToRad((h*15)-90));
    ctx.stroke();
    
//    Date
    ctx.font = "25px Lato";
    ctx.fillStyle = "#fff"
    ctx.fillText (time, 150, 205);
//    Time
    setInterval(renderTime2, 40);
}
renderTime2();






























