//The setup function only happens once
//val
var diam1=0;
function setup() {
	createCanvas(windowWidth,windowHeight); //create a 500px X 500px canvas
    background("#ddb280");
}

//The draw function happens over and over again
function draw() {
  //?background(96,119,130); //an RGB color for the canvas' background
  //circle
  stroke(25,255,127) // an RGB color for the circle's border
  fill(255,255,217,50); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width/ .5),
          random(height/.5),40,40);
    fill("#7a0b07");
        stroke("#FF0000");
        strokeWeight(1);
        ellipse(mouseX,mouseY,20,20);
        line(mouseX,mouseY,10,10);
            fill("#285659");
                strokeWeight(0);
    diam1=diam1+1;
}
function mousePressed(){
    ellipse(mouseX,mouseY,diam1,diam1);
    fill("#00ff87")
}
function mouseDragged(){
    background("#ddb280");
}
//function mousePressed(){
   // Val = random(Val);
//}
//function setup(){
  //createCanvas(100, 100, WEBGL);


//function draw(){
  //background(200);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  //box(200, 200, 200);
