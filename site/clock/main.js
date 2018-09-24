setInterval(function(){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
if(m>985){
ctx.Rect(425/2-75,425/2-75,150,150);
}
ctx.fillRect(0,0,425,425,'#444')
ctx.strokeStyle = '#fff'
ctx.font="25px Arial";
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "#444");
/*ctx.fillStyle = gradient;
ctx.lineWidth=90;
ctx.strokeStyle="#444";
ctx.arc(200,200,45,0,Math.PI*2);
ctx.stroke();*/
var d = new Date().getSeconds();
var m = new Date().getMilliseconds();
var n = new Date().getMinutes();
var h = new Date().getHours();
ctx.strokeStyle='#fff'
ctx.lineWidth=13;
ctx.arc(200,200,45,0,d*(2/60*Math.PI));
ctx.moveTo(230,200);
ctx.arc(200,200,30,0,m*(2/925*Math.PI));
ctx.moveTo(260,200);
ctx.arc(200,200,60,0,n*(2/60*Math.PI));
ctx.moveTo(275,200);
ctx.arc(200,200,75,0,h*(2/24*Math.PI));
ctx.moveTo(210,200);
ctx.arc(200,200,15,0,2*Math.PI);
ctx.moveTo(180,200);
ctx.arc(200,200,5,0,2*Math.PI);
ctx.moveTo(295,200);
ctx.arc(200,200,90,0,2*Math.PI);
ctx.stroke();
},1);
