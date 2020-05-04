window.onload = () => {
    let star = new StarGame();
    star.Set({"resolution":"auto"}).Initialize();
    let line = star.Line(new Vector2(-7.5,0), new Vector2(7.5,0));
    let lin2 = star.Line(new Vector2(0,-7.5), new Vector2(0,7.5));
    line.zIndex = 2;
    lin2.zIndex = 2;
    line.Name = "Cursor1";
    lin2.Name = "Cursor2";
    let f = 0;
    let fr = 0;
    let ta = 0;
    let c = document.getElementById(star.cId);
    let cc = Math.floor(Math.random()*16+100);
    let ccd = 0;
    c.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });
    let balloons = [];
    let riseSpeeds = [];
    let losses = 0;
    setInterval(() => {
        if(star.Input.Mouse.Pressed && ccd == 0) {
            ta+=-1000;
            ccd = 1;
        }
        if(!star.Input.Mouse.Pressed && ccd == 1)
            ccd = 0;
    	line.Transform.Rotation=Math.sin(fr)*25+ta/2.5;
    	lin2.Transform.Rotation=Math.sin(fr)*25+ta/2.5;
    	line.Transform.Position = star.Input.Mouse.Transform.Position;
    	lin2.Transform.Position = star.Input.Mouse.Transform.Position;
        balloons.forEach((cb) => {
        	cb.Transform.Position.y-=riseSpeeds[balloons.indexOf(cb)];
            if(cb.Transform.Position.y <= -15) {
            	cb.Delete();
                riseSpeeds.splice(balloons.indexOf(cb),1);
                balloons.splice(balloons.indexOf(cb),1);
                losses++;
            }
    	});
        f = (f+1)%cc;
        if(f == 1) {
        	cc = Math.floor(Math.random()*150+100);
            let balloon = star.Circle(15, true);
            balloon.Color = "#dd3434";
            balloon.Transform.Scale = new Vector2(1, 1.5);
            balloon.Transform.Position = new Vector2(star.MainCamera.viewportSize.x/10+Math.random()*star.MainCamera.viewportSize.x*0.8,star.MainCamera.viewportSize.y+15);
            riseSpeeds.push(0.1 + Math.random()*3/4);
            balloons.push(balloon);
        }
    	star.MainCamera.Display();
        fr+=Math.PI/100;
        ta*=0.975;
    },10);
}
