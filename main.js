/**Variables Global--------------------------------------------------------------- */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

let x = canvas.width /2; //800base  :2 / 400
let y = canvas.height -80; //600base -80/520

let dx = 0;
let dy = -3;

let ballRadius = 30;

/**function game---------------------------------------------------------------- */
Load();

setInterval(Run,10);

function Run(){
 Update();
 Draw();  

}
function Load(){

}
function Update(){
    
}
function Draw(){
    
    function DrawBall(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(x, y,ballRadius,0, Math.PI*2);
        ctx.fillStyle= "green";
        ctx.fill();
        ctx.closePath();
        
        x += dx;
        y += dy;
        
        
        if(y > canvas.height || y  < 0) {
            dy = -dy;
        }
        if(x  > canvas.width-ballRadius || x  < ballRadius) {
            dx = -dx;
        }
        if(y  > canvas.height-ballRadius || y  < ballRadius) {
            dy = -dy;
        }
      
    }
    DrawBall();
}


