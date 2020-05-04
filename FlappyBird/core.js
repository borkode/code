var game = document.getElementById('main');
var ctx = game.getContext('2d');
var pipes=[[500,200]];
var bird=[];
var screenX=0;
var distanceFromLast=0;
var bird=[20,20];
var Force=1;
var ForceUp=0;
var started=false;

function AddForce(x,event){
	if(event.code=="Space"){
		Force*=0.35;
    	ForceUp+=x;
    }
    if(event.code=="KeyP" && !started){
		setInterval(Frame,1);
        started=true;
	}
}
game.setAttribute("height",window.innerHeight);
game.setAttribute("width",window.innerHeight*0.6);
game.style.left=window.innerWidth/2-window.innerHeight*0.3;
ctx.font = "30px Verdana";
ctx.fillText("Press P to play",0,window.innerHeight/2);
function Frame(){
	game.setAttribute("height",window.innerHeight);
    game.setAttribute("width",window.innerHeight*0.6);
    game.style.left=window.innerWidth/2-window.innerHeight*0.3;
    ctx.beginPath();
    ctx.fillStyle='#fff';
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
    ctx.fill();
    for(var i = 0; i<pipes.length; i++){
    	ctx.beginPath();  ctx.drawImage(document.getElementById('toppipe'),pipes[i][0]-screenX,pipes[i][1]-1260);
        ctx.drawImage(document.getElementById('bottompipe'),pipes[i][0]-screenX,pipes[i][1]+60);
   		ctx.fill();
    }
    screenX+=0.5;        
    distanceFromLast+=0.5;
    if(distanceFromLast>=200){
    	pipes.push([screenX+500,Math.round(Math.random()*0.6*window.innerHeight+window.innerHeight/5)]);
        distanceFromLast=0;
    }
    bird[0]=window.innerHeight*0.3-20;
    Force*=1.01;
    ForceUp*=0.993;
    bird[1]+=Force;
    bird[1]-=ForceUp;
    ctx.beginPath();
    ctx.drawImage(document.getElementById('bird'),bird[0],bird[1]);
    
    ctx.fill();
}
