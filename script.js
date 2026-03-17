const photos=[
"WhatsApp Image 2026-03-16 at 22.14.32.jpeg",
"WhatsApp Image 2026-03-17 at 12.20.05.jpeg",
"WhatsApp Image 2026-03-17 at 11.46.36.jpeg",
"WhatsApp Image 2026-03-16 at 22.18.46.jpeg",
"WhatsApp Image 2026-03-16 at 22.18.31.jpeg"
];

const texts=[

"Phir tum mile, zindagi mili<br>Phir ehsaas hua pyaar kya hai<br>Sukoon kya hai, chain kya hai ❤️",

"Uski aankhon se pyaar kar baitha hu<br>Sab kuch apna us par haar baitha hu<br>Uski ek nazar se sawar jaati hai duniya meri<br>Main apni muskan ka karan usey bana baitha hu ❤️",

"Your smile is my favorite thing in the world ❤️",

"Every moment with you feels magical ✨",

"Happy Birthday my love Aysha ❤️"

];

let index=0;

/* START */
function startSurprise(){

document.getElementById("startScreen").style.display="none";
document.getElementById("mainPage").style.display="flex";

index = 0;

/* music fix */
const music=document.getElementById("music");
music.muted=true;
music.play().then(()=>{music.muted=false;}).catch(()=>{});

slideShow();
}

/* TEXT SHOW */
function showText(text){

const el=document.getElementById("slideText");

el.innerHTML=text;

/* auto-fit */
let size=22;
el.style.fontSize=size+"px";

while(el.scrollHeight > window.innerHeight*0.35 && size>14){
size--;
el.style.fontSize=size+"px";
}
}

/* SLIDESHOW (FIXED) */
function slideShow(){

const img=document.getElementById("slideImage");

/* FIRST SHOW CURRENT */
img.src = photos[index];
img.classList.remove("fade");

showText(texts[index]);

/* WAIT TIME */
let time = texts[index].length * 30 + 3500;

/* NEXT SLIDE */
setTimeout(()=>{

img.classList.add("fade");

setTimeout(()=>{

index++;

if(index < photos.length){
slideShow();
}else{
showGift();
}

},800);

},time);
}

/* FLOW */
function showGift(){
document.getElementById("mainPage").style.display="none";
document.getElementById("giftPage").style.display="flex";
}

function openGift(){
document.getElementById("giftPage").style.display="none";
document.getElementById("cakePage").style.display="flex";
setTimeout(showFinal,2500);
}

function showFinal(){
document.getElementById("cakePage").style.display="none";
document.getElementById("finalPage").style.display="flex";
}

/* HEARTS */
function createHeart(){
const h=document.createElement("div");
h.classList.add("heart");
h.innerHTML="❤️";
h.style.left=Math.random()*100+"vw";
h.style.animationDuration=(4+Math.random()*2)+"s";
document.body.appendChild(h);
setTimeout(()=>h.remove(),5000);
}
setInterval(createHeart,500);

/* STARS BACKGROUND */
const canvas=document.getElementById("stars");
const ctx=canvas.getContext("2d");

function resize(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
}
resize();
window.onresize=resize;

let stars=[];
for(let i=0;i<120;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*1.5
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="white";

stars.forEach(s=>{
ctx.beginPath();
ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
ctx.fill();
});

requestAnimationFrame(draw);
}

draw();
