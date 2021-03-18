var canvas;
var music;
var box;
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(300,570,180,20);
surface1.shapeColor = "red";

surface2 = createSprite(100,570,180,20);
surface2.shapeColor = "green";

surface3 = createSprite(500,570,180,20);
surface3.shapeColor = "blue";

surface4 = createSprite(700,570,180,20);
surface4.shapeColor = "yellow";

box = createSprite(random(20,750),200,40,40);
box.shapeColor ="white"
box.velocityX = 7;
box.velocityY = 7;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    //music.play();
    Edges = createEdgeSprites();
  box.bounceOff(Edges);
collide();
collide2();
collide3();
collide4();
drawSprites();

    //add condition to check if box touching surface and make it box
}

function collide(){
    if(box.isTouching(surface1)){
        box.bounceOff(surface1);
        box.shapeColor = "red";
        
    }
}
function collide2(){
    if(box.isTouching(surface2)){
        box.bounceOff(surface2);
        box.shapeColor = "green";
        box.velocityY = 0;
        box.velocityX = 0;
        
    }
}
function collide3(){
    if(box.isTouching(surface3)){
        box.bounceOff(surface3);
        box.shapeColor = "blue";
        music.play();
        
    }
}
function collide4(){
    if(box.isTouching(surface4)){
        
        box.bounceOff(surface4);
        box.shapeColor = "yellow";
      
    }
}
