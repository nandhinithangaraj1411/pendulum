const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var circle;
var chain1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    constrainedLog = new Log(230,200,20,PI/2)
    circle= new Circle(200,200);
    chain1 = new Chain(circle.body,constrainedLog.body)

}

function draw(){
    background(0);
    Engine.update(engine);
    textSize(15);
    text('Keep pressing enter to oscillate the pendullum', 10, 30,70,80);
    fill(50);
    circle.display();
    constrainedLog.display();
    chain1.display();

      }

