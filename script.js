/* fireworks animation */

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position="fixed";
canvas.style.top="0";
canvas.style.left="0";
canvas.style.width="100%";
canvas.style.height="100%";
canvas.style.pointerEvents="none";

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min,max){
return Math.random()*(max-min)+min;
}

function createFirework(){

const x = random(0,canvas.width);
const y = random(0,canvas.height/2);

for(let i=0;i<30;i++){

const angle = Math.random()2Math.PI;
const speed = random(1,4);

const vx = Math.cos(angle)*speed;
const vy = Math.sin(angle)*speed;

particles.push({
x:x,
y:y,
vx:vx,
vy:vy,
life:60
});

}

}

const particles=[];

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let i=particles.length-1;i>=0;i--){

const p=particles[i];

p.x+=p.vx;
p.y+=p.vy;
p.life--;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle="pink";
ctx.fill();

if(p.life<=0){
particles.splice(i,1);
}

}

requestAnimationFrame(animate);

}

animate();

setInterval(createFirework,2000);
