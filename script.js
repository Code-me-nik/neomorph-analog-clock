
// for minute , second and hour niddle 

let hou = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");

setInterval( function()
{
   const time = new Date();
   hou.style.transform = `rotate(${(time.getHours()) * 30}deg)`;
   min.style.transform = `rotate(${(time.getMinutes() / 60) * 360}deg)`;
   sec.style.transform = `rotate(${(time.getSeconds() / 60) * 360}deg)`;
 },1000);
