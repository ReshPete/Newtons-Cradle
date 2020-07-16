const Engine = Matter.Engine;
const World = Matter.World;
const  Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let roof1, world, engine;
let bob1, bob2, bob3, bob4, bob5;
let rop1, rop2, rope3, rope4, rope5;

function setup() {
    createCanvas(450, 500);
    engine = Engine.create();
    world = engine.world;
    roof1 = new Roof(250, 50, 225, 25);
    bob1 = new Bob(125, 225, 25);
    bob2 = new Bob(175, 225, 25);
    bob3 = new Bob(225, 225, 25);
    bob4 = new Bob(275, 225, 25);
    bob5 = new Bob(325, 225, 25);
    rope1 = new Rope(bob1, roof1, {'x' : -100, 'y' : 0});
    rope2 = new Rope(bob2, roof1, {'x' : -50, 'y' : 0});
    rope3 = new Rope(bob3, roof1, {'x' : 0, 'y' : 0});
    rope4 = new Rope(bob4, roof1, {'x' : 50, 'y' : 0});
    rope5 = new Rope(bob5, roof1, {'x' : 100, 'y' : 0});
}

function draw() {
    background(25, 255, 255);
    Engine.update(engine);
    displayAllRopes();
    displayAllRoofs();
    displayAllBobs();
    if (keyCode === UP_ARROW) {
        bob1.launch();
        keyCode = 0;
      }
}