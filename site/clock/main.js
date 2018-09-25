setInterval(function(){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
if(m>985){
ctx.strokeStyle='#fff'
ctx.Rect(425/2-75,425/2-75,150,150);
ctx.stroke()
}
ctx.beginPath();
ctx.fillRect(0,0,425,425,'#fff')
ctx.strokeStyle = '#fff'
ctx.font="25px Arial";
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "#fff");
/*ctx.fillStyle = gradient;
ctx.lineWidth=90;
ctx.strokeStyle="#444";
ctx.arc(200,200,45,0,Math.PI*2);
ctx.stroke();*/
var d = new Date().getSeconds()+new Date().getMilliseconds()/1000;
var m = new Date().getMilliseconds();
var n = new Date().getMinutes()+new Date().getSeconds()/60;
var h = new Date().getHours()+new Date*().getMinutes()/60;
ctx.beginPath();
ctx.lineWidth=13
ctx.strokeStyle='#333'
var x = 87.5
ctx.arc(200-x,200-x,45,0,2*Math.PI);
ctx.moveTo(230-x,200-x);
ctx.arc(200-x,200-x,30,0,2*Math.PI);
ctx.moveTo(260-x,200-x);
ctx.arc(200-x,200-x,60,0,2*Math.PI);
ctx.moveTo(275-x,200-x);
ctx.arc(200-x,200-x,75,0,2*Math.PI);
ctx.moveTo(215-x,200-x);
ctx.arc(200-x,200-x,15,0,2*Math.PI);
ctx.moveTo(185-x,200-x);
ctx.arc(200-x,200-x,5,0,2*Math.PI);
ctx.moveTo(290-x,200-x);
ctx.arc(200-x,200-x,90,0,2*Math.PI);
ctx.moveTo(300-x,200-x);
ctx.arc(200-x,200-x,100,0,2*Math.PI);
ctx.moveTo(305-x,200-x);
ctx.arc(200-x,200-x,105,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle='#fff'
ctx.lineWidth=13;
ctx.arc(200-x,200-x,45,0,d*(2/60*Math.PI));
ctx.moveTo(230-x,200-x);
ctx.arc(200-x,200-x,30,0,m*(2/925*Math.PI));
ctx.moveTo(260-x,200-x);
ctx.arc(200-x,200-x,60,0,n*(2/60*Math.PI));
ctx.moveTo(275-x,200-x);
ctx.arc(200-x,200-x,75,0,h*(2/24*Math.PI));
ctx.moveTo(215-x,200-x);
ctx.arc(200-x,200-x,15,0,2*Math.PI);
ctx.moveTo(185-x,200-x);
ctx.arc(200-x,200-x,5,0,2*Math.PI);
ctx.moveTo(290-x,200-x);
ctx.arc(200-x,200-x,90,0,2*Math.PI);
ctx.moveTo(300-x,200-x);
ctx.arc(200-x,200-x,100,0,2*Math.PI);
ctx.stroke();

},1);
