let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {

let now = new Date();

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

let hDeg = 30 * h + m / 2;
let mDeg = 6 * m;
let sDeg = 6 * s;

hour.style.transform = `rotate(${hDeg}deg)`;
min.style.transform = `rotate(${mDeg}deg)`;
sec.style.transform = `rotate(${sDeg}deg)`;

},1000);