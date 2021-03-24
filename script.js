var ctx = canvas.getContext('2d');
var ctx0 = cnvs.getContext('2d');
if (window.innerWidth < window.innerHeight) {
  canvas.width = window.innerWidth - 20;
  canvas.height = window.innerWidth - 20;
  cnvs.width = window.innerWidth - 20;
  cnvs.height = window.innerWidth - 20;
} else {
  canvas.width = window.innerHeight - 20;
  canvas.height = window.innerHeight - 20;
  cnvs.width = window.innerHeight - 20;
  cnvs.height = window.innerHeight - 20;
}
var timeDraw = 0;
var timeMath = 0;
const arc = {
  r: canvas.width / 80,
  colors_s: 1,
}
var sph0 = {
  x0:canvas.width / 2,
  y0: canvas.height / 2,
  width: canvas.width / 5,
  x1: 0,
  y1: 0,
  s: 0.11,
}
var sph1 = {
  x0: sph0.x1,
  y0: sph0.y1,
  width: canvas.width / 10,
  x1: 0,
  y1: 0,
  s: 0.14,
}
var sph2 = {
  x0: sph1.x1,
  y0: sph1.y1,
  width: canvas.width / 15,
  x1: 0,
  y1: 0,
  s: -0.31,
}
ctx0.strokeStyle = "white";
ctx.strokeStyle = "white";
var deferCord = [{x: (canvas.width / 2) + sph0.width + sph1.width + sph2.width, y: canvas.height / 2}];
console.log(deferCord);
setInterval( () => {
  ctx0.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  //ctx.arc(sph2.x1, sph2.y1, arc.r, 0, Math.PI * 2);
  ctx.moveTo(deferCord[deferCord.length - 1].x, deferCord[deferCord.length - 1].y);
  ctx.lineTo(sph2.x1, sph2.y1);
  ctx.stroke();
  ctx0.closePath();
  ctx0.beginPath();
  ctx0.moveTo(sph0.x0, sph0.y0);
  ctx0.lineTo(sph0.x1, sph0.y1);
  ctx0.stroke();
  ctx0.closePath();
  ctx0.beginPath();
  ctx0.moveTo(sph0.x1, sph0.y1);
  ctx0.lineTo(sph1.x1, sph1.y1);
  ctx0.stroke();
  ctx0.closePath();
  ctx0.beginPath();
  ctx0.moveTo(sph1.x1, sph1.y1);
  ctx0.lineTo(sph2.x1, sph2.y1);
  ctx0.stroke();
  ctx0.closePath();
  timeDraw ++;
}, 1000 / 1000);

var clear_deferCord = setInterval( () => {
  if (deferCord.length == 3) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  if (deferCord.length == 5) {
    clear_deferCord = clearInterval(clear_deferCord);
  }
},1000 / 900)

setInterval( () => {
  deferCord.push({x: sph2.x1, y: sph2.y1});
  sph0.x1 = sph0.x0 + Math.round(Math.cos(timeMath * sph0.s) * sph0.width);
  sph0.y1 = sph0.y0 + Math.round(Math.sin(timeMath * sph0.s) * sph0.width);
  sph1.x1 = sph0.x1 + Math.round(Math.cos(timeMath * sph1.s) * sph1.width);
  sph1.y1 = sph0.y1 + Math.round(Math.sin(timeMath * sph1.s) * sph1.width);
  sph2.x1 = sph1.x1 + Math.round(Math.cos(timeMath * sph2.s) * sph2.width);
  sph2.y1 = sph1.y1 + Math.round(Math.sin(timeMath * sph2.s) * sph2.width);
  timeMath ++;
}, 1000 / 900);
