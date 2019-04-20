class Canvas {
	constructor(canvasId){
    	this._cId = canvasId.toString();
     	this.backgroundColor = "#fff";
    	this.strokeColor = "#000";
        this.lineWidth=1;
    }
    Draw(method,params=[]){
    	let ctx = document.getElementById(this._cId).getContext("2d");
    	switch(method.toString().toLowerCase()){
        	case "line":
            	ctx.beginPath();
                	ctx.lineWidth=this.lineWidth;
                	ctx.strokeStyle=this.strokeColor;
            		ctx.moveTo(params[0],params[1]);
                	ctx.lineTo(params[2],params[3]);
                ctx.stroke();
            	break;
            case "circle":
            	ctx.beginPath();
                	ctx.lineWidth=this.lineWidth;
                    ctx.strokeStyle=this.strokeColor;
                    ctx.fillStyle=this.strokeColor;
                    ctx.arc(params[0],params[1],params[2],0,params[3]*Math.PI/50);
                params[4]?ctx.fill():ctx.stroke();
            	break;
            case "clear":
            	ctx.beginPath();
                	ctx.moveTo(0,0);
                    ctx.fillStyle=this.backgroundColor;
					ctx.fillRect(0,0,9007199254740991,9007199254740991);
                ctx.fill();
            	break;
            case "init":
            	ctx.beginPath();
                	ctx.moveTo(0,0);
                    ctx.fillStyle=this.backgroundColor;
					ctx.fillRect(0,0,9007199254740991,9007199254740991);
                ctx.fill();
            	break;
            default:break;
        }
    }
}
