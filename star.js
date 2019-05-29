"use strict";

let StarData = {
    "GameObjects":[],
    "Input":{
        "KeysDown":[],
        "MouseButtons":[]
    }
};

class StarGame {
    constructor(canvasId = "StarGame") {
        this.cId = canvasId;
        this.ctx = document.getElementById(canvasId).getContext("2d");
        this.Colors = {
            "White": {"ValueType": "color","Value": "#ffffff"},
            "Black": {"ValueType": "color","Value": "#000000"}
        };
        this.Values = {};
        this.MainCamera = new Camera();
        this.Input = {
            "Mouse": {
                "Transform": {
                    "Position": new Vector2(0, 0)
                }
            },
            "Keyboard": {
                "KeyDown": (keyId) => {
                    return StarData.Input.KeysDown.indexOf(keyId.toLowerCase()) != -1;
                }
            }
        };
        document.getElementById(canvasId).onmousemove = (e) => {
            this.Input.Mouse.Transform.Position = new Vector2(Math.round(e.clientX - document.getElementById(canvasId).getBoundingClientRect().x), Math.round(e.clientY - document.getElementById(canvasId).getBoundingClientRect().y));
        };
        document.onkeydown = (event) => {
            if (StarData.Input.KeysDown.indexOf(event.key.toLowerCase()) == -1)
                StarData.Input.KeysDown.push(event.key.toLowerCase());
        };
        document.onkeyup = (event) => {
            delete StarData.Input.KeysDown[StarData.Input.KeysDown.indexOf(event.key.toLowerCase())];
        };
    };
    
    Set(values) {
        Object.keys(values).forEach((key) => {
            this.Values[key] = values[key];
        });
        return this;
    };

    Initialize() {
        Object.keys(this.Values).forEach((key) => {
            switch(key.toLowerCase()) {
                case "resolution":
                    if(this.Values[key] != "auto") {
                        document.getElementById(this.cId).setAttribute("width",this.Values[key][0]);
                        document.getElementById(this.cId).setAttribute("height",this.Values[key][1]);
                        this.MainCamera.viewportSize = new Vector2(this.Values[key][0], this.Values[key][1]);
                        this.MainCamera.autoRes = false;
                    }else{
                        document.getElementById(this.cId).setAttribute("width",document.getElementById(this.cId).getBoundingClientRect().width);
                        document.getElementById(this.cId).setAttribute("height",document.getElementById(this.cId).getBoundingClientRect().height);
                        this.MainCamera.viewportSize = new Vector2(document.getElementById(this.cId).getBoundingClientRect().width, document.getElementById(this.cId).getBoundingClientRect().height);
                        this.MainCamera.autoRes = true;
                    }
                    break;
                case "drawdefault":
                    Object.keys(this.Values[key]).forEach((ctxv) => {
                        this.ctx[ctxv] = this.Values[key][ctxv];
                    });
                    break;
            };
        });
    };

    Line(pointA, pointB) {
        let GO = new GameObject();
        GO.Line = {};
        GO.Line.PointCount = 2;
        GO.Line.Points = {"pointA":new Vector2(pointA.x||pointA[0],pointA.y||pointA[1]), "pointB":new Vector2(pointB.x||pointB[0],pointB.y||pointB[1])};
        GO.RenderParams = GO.Line.Points;
        GO.Render = (json, cameraPos, obj) => {
            let fjson = JSON.parse(JSON.stringify(json));
            fjson.pointA.x+=(cameraPos.x+obj.Transform.Position.x);
            fjson.pointA.y+=(cameraPos.y+obj.Transform.Position.y);
            fjson.pointB.x+=(cameraPos.x+obj.Transform.Position.x);
            fjson.pointB.y+=(cameraPos.y+obj.Transform.Position.y);
            this.ctx.save();
            this.ctx.translate((Math.max(fjson.pointA.x,fjson.pointB.x)-(fjson.pointB.x-fjson.pointA.x)/2),(Math.max(fjson.pointA.y,fjson.pointB.y)-(fjson.pointB.y-fjson.pointA.y)/2));
            this.ctx.rotate((obj.Transform.Rotation||0) * Math.PI / 180);
            this.ctx.beginPath();
                this.ctx.moveTo(-(fjson.pointB.x-fjson.pointA.x)/2,-(fjson.pointB.y-fjson.pointA.y)/2);
                this.ctx.lineTo((fjson.pointB.x-fjson.pointA.x)/2,(fjson.pointB.y-fjson.pointA.y)/2);
            this.ctx.stroke();
            this.ctx.restore();
        };
        return GO;
    };
    
    Circle(radius) {
        let GO = new GameObject();
        GO.Circle = {};
        GO.Circle.Radius = radius;
        GO.RenderParams = GO.Circle.Radius;
        GO.Render = (radius, cameraPos, obj) => {
            this.ctx.save();
            this.ctx.translate(-cameraPos.x-obj.Transform.Position.x,-cameraPos.y-obj.Transform.Position.y);
            this.ctx.rotate(obj.Transform.Rotation * Math.PI / 180);
            this.ctx.beginPath();
                this.ctx.arc(2*(cameraPos.x+obj.Transform.Position.x),2*(cameraPos.y+obj.Transform.Position.y),radius,0,2*Math.PI);
            this.ctx.stroke();
            this.ctx.restore();
        };
        return GO;
    };

    Curve(root, anchor1, anchor2, end = undefined) {
        let GO = new GameObject();
        GO.Line = {};
        GO.Line.PointCount = end!=undefined ? 4:3;
        GO.Line.Points = {"root":root, "anchor1":anchor1, "anchor2":anchor2, "end":end};
        GO.RenderParams = GO.Line.Points;
        GO.Render = (json, cameraPos, obj) => {
            this.ctx.beginPath();
            this.ctx.moveTo(json.root.x+cameraPos.x+obj.Transform.Position.x, json.root.y+cameraPos.y+obj.Transform.Position.y);
            end != undefined ?
                this.ctx.bezierCurveTo(json.anchor1.x+cameraPos.x+obj.Transform.Position.x, json.anchor1.y+cameraPos.y+obj.Transform.Position.y, json.anchor2.x+cameraPos.x+obj.Transform.Position.x, json.anchor2.y+cameraPos.y+obj.Transform.Position.y, json.end.x+cameraPos.x+obj.Transform.Position.x, json.end.y+cameraPos.y+obj.Transform.Position.y):
                this.ctx.quadraticCurveTo(json.anchor1.x+cameraPos.x+obj.Transform.Position.x, json.anchor1.y+cameraPos.y+obj.Transform.Position.y, json.anchor2.x+cameraPos.x+obj.Transform.Position.x, json.anchor2.y+cameraPos.y+obj.Transform.Position.y);
        this.ctx.stroke();
        };
        return GO;
    };
};

class Camera {
    constructor(canvasId = "StarGame") {
        this.cId = canvasId;
        this.ctx = document.getElementById(canvasId).getContext("2d");
        this.BackgroundColor = "#ffffff";
        this.viewportSize;
        this.GameObject = new GameObject();
        this.GameObject.Name = "Camera";
        this.autoRes = false;
        return this;
    };

    Display(opt="nofill=false;") {
        if (this.autoRes){
            this.viewportSize = new Vector2(document.getElementById(this.cId).getBoundingClientRect().width, document.getElementById(this.cId).getBoundingClientRect().height);
            document.getElementById(this.cId).setAttribute("width",document.getElementById(this.cId).getBoundingClientRect().width);
            document.getElementById(this.cId).setAttribute("height",document.getElementById(this.cId).getBoundingClientRect().height);
        };
        let options = opt.split(";");
        options.forEach((optionText) => {
            let key = optionText.split("=")[0];
            let val = optionText.split("=")[1];
            switch(key) {
                case "nofill":
                    if (val == "true")
                        ""
                    else{
                        this.ctx.beginPath();
                            this.ctx.fillStyle = this.BackgroundColor;
                            this.ctx.fillRect(0,0,2147483647,2147483647);
                        this.ctx.stroke();
                    }
                    break;
            };
        });
        Objects.Get().forEach((object) => {
            object.Render(object.RenderParams, this.GameObject.Transform.Position, object);
        });
    };
};

class Vector2 {
    constructor(px=0.1, py=0.1) {
        this.x = px;
        this.y = py;
        return this;
    };
};

class GameObject {
    constructor() {
        this.ObjectType;
        this.Name = "Object";
        this.Transform = {
            "Position": new Vector2(0, 0),
            "Rotation": 0,
            "GameObject": this,
            "PointTowards": (p) => {
                let newRotation = Math.atan(
                    (this.Transform.Position.y-p.y) / (this.Transform.Position.x-p.x)
                ) * 180 / Math.PI;
                this.Transform.Rotation = newRotation;
                return newRotation;
            }
        };
        this.Render = () => {};
        this.RenderParams;
        return StarData.GameObjects.push(this);
    };

    Delete() {
        delete StarData.GameObjects[StarData.GameObjects.indexOf(this)];
        delete this;
    };

};

let Objects = {
    "Get" : (ObjectName = "") => {
        let ret = [];
        StarData.GameObjects.forEach((object) => {
            if(object.Name == ObjectName) 
                ret.push(object);
        });
        if(ObjectName == "")
            ret = StarData.GameObjects;
        return ret;
    }
};
