var diam1;
var diam1 = 5;
function setup(){
createCanvas(900,900);
    background("#003366");
}
function draw(){
    //background("#003366");
        fill("#000000");
            stroke("#ADD8E6");
                strokeWeight(10);
                 ellipse(450,425,100,100);
    fill("#7a0b07");
        stroke("#FF0000");
            strokeWeight(1);
                ellipse(450,425,20,20);
                ellipse(random(width/ 2),
                       random(height/ 2), 50, 50);
        line(450,425,10,10);
            fill("#285659");
                strokeWeight(0);
                    point(800,100);
    rect(550,500,100,100);
    fill("#858b8c");
        triangle(200,250,300,300,100,300);
    fill("#7a0b07");
        stroke("#FF0000");
            strokeWeight(1);
             ellipse(mouseX,mouseY,20,20);
    line(mouseX,mouseY,10,10);
    fill("#002b33");
    noStroke ();
    ellipse(400,400,diam1,diam1);
    //diam1=diam1+5;
}
function mousePressed() {
    diam1 = diam1+5;
}