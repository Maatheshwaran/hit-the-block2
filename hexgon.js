class Hexgon {
    constructor(x,y,width,height) {
      var options = {
           isStatic: false,
           restitution:0.8,
           friction:1.0,
           density:1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };
