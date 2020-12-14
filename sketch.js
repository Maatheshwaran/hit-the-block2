const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var hexgon,image;
var engine, world;

function preload(){
    image = loadImage("polygon.png")
}

function setup(){
    createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;
    
    Engine.run(engine);

    hexgon = new Hexgon(50,200,20,30);
    ball = Bodies.circle(200,400,10);

    slingshot = new Slingshot(hexgon.body,{x:100,y:200});

    ground1 = new Ground(390,250,150,20);
    ground2 = new Ground(690,250,150,20);

    block1 = new Block(330,230,30,40);
    block2 = new Block(360,230,30,40);
    block3 = new Block(390,230,30,40);
    block4 = new Block(420,230,30,40);
    block5 = new Block(450,230,30,40);
    block6 = new Block(360,190,30,40);
    block7 = new Block(390,190,30,40);
    block8 = new Block(420,190,30,40);
    block9 = new Block(390,150,30,40);
    block10 = new Block(630,230,30,40);
    block11 = new Block(660,230,30,40);
    block12 = new Block(690,230,30,40);
    block13 = new Block(720,230,30,40);
    block14 = new Block(750,230,30,40);
    block15 = new Block(660,190,30,40);
    block16 = new Block(690,190,30,40);
    block17 = new Block(720,190,30,40);
    block18 = new Block(690,150,30,40);


    World.add(world,ball);

    
}

function draw() {
    rectMode(CENTER);
    background(225);
    //imageMode(CENTER);
    //image(image,ball.position.x,ball.position.y,50,40);

    hexgon.display();
    ground1.display();
    ground2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    slingshot.display();


    drawSprites();
}  

function mouseDragged(){
    Matter.Body.setPosition(hexgon.body,{x: mouseX,y: mouseY});
}
function mouseReleased() {
    slingshot.fly();
}

function keyPressed(){
    if(keyCode == 32){
        slingshot.attach(hexgon.body);
    }
}