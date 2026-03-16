const text = "You make my life brighter every day. Happy Birthday my love Aysha ❤️";
let i = 0;
const photos = [
"photo1.jpg",
"photo2.jpg",
"photo3.jpg"
];

const texts = [
"You are the most beautiful part of my life ❤️",
"Every moment with you feels magical ✨",
"Happy Birthday my love Aysha ❤️"
];

let index = 0;

function slideShow(){

document.getElementById("slideImage").src = photos[index];
document.getElementById("slideText").innerText = texts[index];

index++;

if(index >= photos.length){
index = 0;
}

}

setInterval(slideShow,3000);

function typing(){
if(i < text.length){
document.getElementById("message").innerHTML += text.charAt(i);
i++;
setTimeout(typing,70);
}
}

function nextPage(){
document.getElementById("messagePage").style.display = "block";
typing();
}

/* floating hearts */

function createHeart(){

const heart = document.createElement("div");
heart.classList.add("heart");
heart.innerHTML = "❤️";

heart.style.left = Math.random()*100 + "vw";
heart.style.animationDuration = (4 + Math.random()*3) + "s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

setInterval(createHeart,400);
