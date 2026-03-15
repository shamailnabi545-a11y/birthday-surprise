const text = "You make my life brighter every day. Happy Birthday my love Aysha ❤️";
let i = 0;

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
