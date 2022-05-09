img="";

function preload(){
img=loadImage("dog_cat.jpg");
}

function setup(){
 canvas=createCanvas(500,500);
 canvas.center();
}

function draw(){
    image(img,0,0,500,500);
    fill("blue");
    text("Dog",45,75);
    noFill();
    stroke("red");
    rect(30,60,450,350);
}