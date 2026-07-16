/* ==========================================
   Fade in elements when they scroll into view
========================================== */

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

document.querySelectorAll(
".benefit, .mission-section, .thank-you"
).forEach(el => {

el.classList.add("hidden");

observer.observe(el);

});


/* ==========================================
   Button Click Animation
========================================== */

const button = document.querySelector("button");

button.addEventListener("click", () => {

button.innerHTML = "Joining...";

setTimeout(() => {

button.innerHTML = "✈ Join the Journey";

},3000);

});


/* ==========================================
   Input Focus Animation
========================================== */

document.querySelectorAll("input").forEach(input=>{

input.addEventListener("focus",()=>{

input.parentElement.classList.add("active");

});

input.addEventListener("blur",()=>{

input.parentElement.classList.remove("active");

});

});


/* ==========================================
   Simple Form Validation
========================================== */

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

const email =
document.querySelector('input[name="EMAIL"]');

if(!email.value.includes("@")){

e.preventDefault();

alert("Please enter a valid email address.");

return;

}

});


/* ==========================================
   Smooth Hover Lift for Benefit Cards
========================================== */

document.querySelectorAll(".benefit").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";
card.style.transition=".3s";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


/* ==========================================
   Random Sakura Falling Animation
========================================== */

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=
5+Math.random()*6+"s";

petal.style.fontSize=
16+Math.random()*14+"px";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},11000);

}

setInterval(createPetal,1200);


/* ==========================================
   Page Loaded Animation
========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/* ==========================================
   Console Message :)
========================================== */

console.log(
"Tokyo Japan South Mission Site Loaded 🇯🇵"
);
