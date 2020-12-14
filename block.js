class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      if(this.body.speed<3) {
        super.display();
      }
      else {
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility)
        
        pop();
      
    }
  };
}
