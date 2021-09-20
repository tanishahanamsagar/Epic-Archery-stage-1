const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var canvas;
var computer, computerBase;
var player, playerBase;


function setup() {
    canvas = createCanvas(1300, 650);

    //Initialising Engine
    engine = Engine.create();
    world = engine.world;

    //Create Player Base and Computer Base Object
    playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
    player = new Player(285, playerBase.body.position.y - 153, 50, 180);


    computerBase = new ComputerBase(
        width - 300,
        random(450, height - 300),
        180,
        150
    );
    computer = new ComputerPlayer(
        width - 280,
        computerBase.body.position.y - 153,
        50,
        180
    );
}

function draw() {
    background("pink")
    Engine.update(engine);

    fill("#FFFF");
    textAlign("center");
    textSize(40);
    text("EPIC ARCHERY", width / 2, 100)

    //Display Playerbase and computer base 
    playerBase.display()
    player.display();
    computerBase.display();
    computer.display();

    //display Player and computerplayer






}