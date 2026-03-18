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

function startSurprise(){

document.getElementById("startScreen").style.display="none";
document.getElementById("mainPage").style.display="flex";

heartExplosion();

const music=document.getElementById("music");
music.muted=true;
music.play().then(()=>{music.muted=false;});

index=0;

setTimeout(()=>{
showSlide();
setTimeout(nextSlide,getDelay());
},800);
}

/* HEART EXPLOSION */
function heartExplosion(){
const container=document.getElementById("heartContainer");

for(let i=0;i<30;i++){
const h=document.createElement("div");
h.classList.add("explodeHeart");
h.innerHTML="❤️";

let x=(Math.random()-0.5)*400+"px";
let y=(Math.random()-0.5)*400+"px";

h.style.setProperty("--x",x);
h.style.setProperty("--y",y);

h.style.left="50%";
h.style.top="50%";

container.appendChild(h);

setTimeout(()=>h.remove(),1000);
}
}

/* SLIDES */
function showSlide(){
const img=document.getElementById("slideImage");

img.style.transform="scale(1)";
img.src=photos[index];

setTimeout(()=>{
img.style.transform="scale(1.08)";
},100);

showText(texts[index]);
}

function nextSlide(){
const img=document.getElementById("slideImage");

img.classList.add("fade");

setTimeout(()=>{
index++;

if(index<photos.length){
img.classList.remove("fade");
showSlide();
setTimeout(nextSlide,getDelay());
}else{
showGift();
}

},800);
}

function getDelay(){
return texts[index].length*40+5000;
}

/* TEXT */
function showText(text){
const el=document.getElementById("slideText");

el.style.opacity=0;

setTimeout(()=>{
el.innerHTML=text;
el.style.opacity=1;
},200);
}

/* FLOW */
function showGift(){
document.getElementById("mainPage").style.display="none";
document.getElementById("giftPage").style.display="flex";
}

function openGift(){
document.getElementById("giftPage").style.display="none";

// ❗ IMPORTANT: बाकी pages भी hide करो
document.getElementById("mainPage").style.display="none";

document.getElementById("magicPage").style.display="flex";
}

function startMagic(){
document.getElementById("magicPage").style.display="none";
document.getElementById("fireworkPage").style.display="flex";
startFireworks();
}

/* FLOAT HEARTS */
setInterval(()=>{
const h=document.createElement("div");
h.classList.add("heart");
h.innerHTML="❤️";
h.style.left=Math.random()*100+"vw";
h.style.animationDuration=(4+Math.random()*2)+"s";
document.body.appendChild(h);
setTimeout(()=>h.remove(),5000);
},500);

/* STARS */
const canvas=document.getElementById("stars");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

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

draw();   // ← तुम्हारा existing code

/* ============================= */
/* 🔥 FIREWORKS CODE START HERE */
/* ============================= */

function startFireworks(){

const canvas=document.getElementById("fireworksCanvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let fireworks=[];
let particles=[];

class Firework{
constructor(){
this.x=Math.random()*canvas.width;
this.y=canvas.height;
this.targetY=Math.random()*canvas.height/2;
this.speed=5;
this.color=`hsl(${Math.random()*360},100%,50%)`;
}

update(){
this.y-=this.speed;

if(this.y<=this.targetY){
this.explode();
return true;
}
return false;
}

draw(){
ctx.beginPath();
ctx.arc(this.x,this.y,3,0,Math.PI*2);
ctx.fillStyle=this.color;
ctx.fill();
}

explode(){
for(let i=0;i<50;i++){
particles.push(new Particle(this.x,this.y,this.color));
}
}
}

class Particle{
constructor(x,y,color){
this.x=x;
this.y=y;
this.speed=Math.random()*5;
this.angle=Math.random()*Math.PI*2;
this.gravity=0.05;
this.alpha=1;
this.color=color;
}

update(){
this.x+=Math.cos(this.angle)*this.speed;
this.y+=Math.sin(this.angle)*this.speed;
this.speed*=0.98;
this.y+=this.gravity;
this.alpha-=0.01;
}

draw(){
ctx.globalAlpha=this.alpha;
ctx.beginPath();
ctx.arc(this.x,this.y,2,0,Math.PI*2);
ctx.fillStyle=this.color;
ctx.fill();
ctx.globalAlpha=1;
}
}

function animate(){
requestAnimationFrame(animate);

ctx.fillStyle="rgba(0,0,0,0.2)";
ctx.fillRect(0,0,canvas.width,canvas.height);

if(Math.random()<0.05){
fireworks.push(new Firework());
}

fireworks=fireworks.filter(f=>{
f.draw();
return !f.update();
});

particles=particles.filter(p=>{
p.update();
p.draw();
return p.alpha>0;
});
}

animate();
}

/* ============================= */
/* 🔥 FIREWORKS CODE END */
/* ============================= */
