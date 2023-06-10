//your JS code here. If required.
const p = document.getElementById("counter");
const btn = document.getElementById("incrementBtn");
btn.addEventListener("click",()=>{
	alert(Number(p.innerText));
	p.innerText=Number(p.innerText)+1;
})