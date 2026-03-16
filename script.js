const photos = [

"WhatsApp Image 2026-03-16 at 22.14.32.jpeg",
"WhatsApp Image 2026-03-13 at 22.38.47.jpeg,
"WhatsApp Image 2026-03-16 at 22.18.46.jpeg,
"photo4.jpg"

];

const texts = [

"The day you came into my life everything became beautiful ❤️",

"Your smile is my favorite thing in the world ✨",

"Every moment with you feels magical 💖",

"Happy Birthday my love Aysha ❤️"

];

let index = 0;

function startSurprise(){

document.getElementById("startScreen").style.display="none";

document.getElementById("mainPage").style.display="block";

document.getElementById("music").play();

slideShow();

}

function slideShow(){

document.getElementById("slideImage").src=photos[index];

document.getElementById("slideText").innerText=texts[index];

index++;

if(index<photos.length){

setTimeout(slideShow,3000);

}

else{

setTimeout(showFinalPage,3000);

}

}

function showFinalPage(){

document.getElementById("mainPage").style.display="none";

document.getElementById("finalPage").style.display="block";

}

/* floating hearts */

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*3)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,400);
