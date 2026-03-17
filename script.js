const photos=[
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg"
];

const texts=[

`Phir tum mile, zindagi mili  
Phir ehsaas hua pyaar kya hai  
Sukoon kya hai, chain kya hai ❤️`,

`Uski aankhon se pyaar kar baitha hu
Sab kuch apna us par haar baitha hu
Uski ek nazar se sawar jaati hai duniya meri
Main apni muskan ka karan usey bana baitha hu ❤️`,

"Your smile is my favorite thing in the world ❤️",

"Every moment with you feels magical ✨",

"Happy Birthday my love Aysha ❤️"

];

let index=0;

/* START */
function startSurprise(){

document.getElementById("startScreen").style.display="none";
document.getElementById("mainPage").style.display="block";

document.getElementById("music").play();

slideShow();
}

/* TYPE */
function typeText(text){

let i=0;
const el=document.getElementById("slideText");
el.innerHTML="";
el.style.opacity=1;

function typing(){
if(i<text.length){
el.innerHTML+=text.charAt(i);
i++;
setTimeout(typing,35);
}
}

typing();
}

/* SLIDESHOW */
function slideShow(){

document.getElementById("slideImage").src=photos[index];

const el=document.getElementById("slideText");
el.style.opacity=0;

setTimeout(()=>{typeText(texts[index]);},500);

index++;

if(index<photos.length){
setTimeout(slideShow,4000);
}else{
setTimeout(showGift,4000);
}
}

/* GIFT */
function showGift(){
document.getElementById("mainPage").style.display="none";
document.getElementById("giftPage").style.display="block";
}

function openGift(){
document.getElementById("giftPage").style.display="none";
document.getElementById("cakePage").style.display="block";

setTimeout(showFinal,3000);
}

/* FINAL */
function showFinal(){

document.getElementById("cakePage").style.display="none";
document.getElementById("finalPage").style.display="block";

setInterval(createFirework,300);
}

/* HEARTS */
function createHeart(){

const heart=document.createElement("div");
heart.classList.add("heart");
heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";
heart.style.animationDuration=(4+Math.random()*3)+"s";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),6000);
}

setInterval(createHeart,400);

/* FIREWORKS */
function createFirework(){

const f=document.createElement("div");
f.classList.add("firework");
f.innerHTML="✨";

f.style.left=Math.random()*100+"vw";
f.style.top=Math.random()*100+"vh";

document.body.appendChild(f);

setTimeout(()=>f.remove(),1000);
}
