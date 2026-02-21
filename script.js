let musicStarted=false;
const music=document.getElementById("bgMusic");

/* MUSIC */

function startMusic(){
if(!musicStarted){
music.play();
musicStarted=true;
}
}

/* FIREWORKS LOOP */

const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;

let particles=[];

function burst(x,y){

for(let i=0;i<80;i++){
particles.push({
x:x,
y:y,
dx:(Math.random()-0.5)*6,
dy:(Math.random()-0.5)*6,
life:60
});
}

}

function fireworks(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
p.x+=p.dx;
p.y+=p.dy;
p.life--;

ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;
ctx.fillRect(p.x,p.y,3,3);
});

particles=particles.filter(p=>p.life>0);

requestAnimationFrame(fireworks);
}

setInterval(()=>{
burst(Math.random()*canvas.width,Math.random()*canvas.height/2);
},800);

fireworks();
setInterval(()=>{

const msg=document.createElement("div");

msg.innerText="Happy Birthday 🎉";
msg.style.position="fixed";
msg.style.left=Math.random()*100+"vw";
msg.style.top="100vh";
msg.style.fontSize="18px";
msg.style.opacity="0.8";
msg.style.animation="floatUp 6s linear";

document.body.appendChild(msg);

setTimeout(()=>msg.remove(),6000);

},2500);
/* MOVING DOTS */

const bg=document.getElementById("bgDots");
const bctx=bg.getContext("2d");

bg.width=innerWidth;
bg.height=innerHeight;

let dots=[];

for(let i=0;i<80;i++){
dots.push({
x:Math.random()*bg.width,
y:Math.random()*bg.height,
r:Math.random()*2,
dx:Math.random()*0.5,
dy:Math.random()*0.5
});
}

function animateDots(){

bctx.clearRect(0,0,bg.width,bg.height);

dots.forEach(d=>{
bctx.beginPath();
bctx.arc(d.x,d.y,d.r,0,Math.PI*2);
bctx.fillStyle="white";
bctx.fill();

d.x+=d.dx;
d.y+=d.dy;

if(d.x>bg.width)d.x=0;
if(d.y>bg.height)d.y=0;
});

requestAnimationFrame(animateDots);
}

animateDots();

/* BALLOONS */

const balloonBox=document.getElementById("balloons");

setInterval(()=>{

const b=document.createElement("span");

b.innerText="🎈";
b.style.left=Math.random()*100+"vw";
b.style.animationDuration=6+Math.random()*5+"s";

balloonBox.appendChild(b);

setTimeout(()=>b.remove(),11000);

},800);

/* SPARKLES */

const sparkBox=document.getElementById("sparkles");

for(let i=0;i<40;i++){

const s=document.createElement("span");

s.style.left=Math.random()*100+"vw";
s.style.top=Math.random()*100+"vh";

sparkBox.appendChild(s);

}

/* STEPS */

const step1=document.getElementById("step1");
const step2=document.getElementById("step2");
const step3=document.getElementById("step3");
const step4=document.getElementById("step4");

setTimeout(()=>{
step1.classList.add("hidden");
step2.classList.remove("hidden");

const vid = document.getElementById("cakeVideo");
if(vid){
vid.currentTime = 0;
vid.play();
}

},4000);

setTimeout(()=>{
step2.classList.add("hidden");
step3.classList.remove("hidden");
startSlides();
},12000);

/* SLIDES */

const images=["image1.jpeg","image2.jpeg","image3.jpeg"];

const texts=[
"Happy 16th Birthday ❤️",
"You are the bestest 🤍",
"So proud of you 🌟"
];

let i=0;

function startSlides(){

const img=document.getElementById("slideImg");
const txt=document.getElementById("slideText");

function next(){

img.src=images[i];
txt.innerText=texts[i];

i++;

if(i<images.length){
setTimeout(next,3000);
}else{
setTimeout(()=>{
step3.classList.add("hidden");
step4.classList.remove("hidden");
},3000);
}
}

next();
}

/* TYPING LETTER */

const message=`Happy 16th Birthday my dear brother ❤️

You are my pride, my strength,
and my forever hero.

I wish all your dreams come true ✨`;

function typeLetter(){

const el=document.getElementById("typedText");
let index=0;

function type(){
if(index<message.length){
el.innerHTML+=message[index];
index++;
setTimeout(type,40);
}
}

type();
}

/* CONFETTI */

function confetti(){

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.style.position="fixed";
c.style.width="6px";
c.style.height="6px";
c.style.background=`hsl(${Math.random()*360},100%,50%)`;
c.style.left=Math.random()*100+"vw";
c.style.top="-10px";
c.style.zIndex="10";

document.body.appendChild(c);

let fall=setInterval(()=>{

c.style.top=parseFloat(c.style.top)+5+"px";

if(parseFloat(c.style.top)>innerHeight){
clearInterval(fall);
c.remove();
}

},20);

}

}
const cakeVideo = document.getElementById("cakeVideo");

if(cakeVideo){
cakeVideo.addEventListener("play",()=>{
confetti();
});
}
/* GIFT */

function openGift() {

  document.getElementById("letterBox").classList.remove("hidden");

  confetti();
  typeLetter();

}