console.log('hello js ')
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

/* variables-----------------------------------------------------------------------*/
/**posiruion de départ = x, y */
let x = canvas.width /2;
let y = canvas.height -80;
console.log(canvas.height);
/**deplacement sur x et y = dx,dy */
let dx = 1;
let dy = -1;

let ballRadius = 30;

console.log(document.body.children);
/**function------------------------------------------------------------------------ */
function drawBall(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.beginPath();
ctx.arc(x, y,ballRadius,0, Math.PI*2);
ctx.fillStyle= "green";
ctx.fill();
ctx.closePath();

x += dx;
y += dy;


if(y + dy > canvas.height || y + dy < 0) {
    dy = -dy;
}
if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
}
if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
}

}
setInterval(drawBall,10);

/*le rebond de la ball sur les cotés */
