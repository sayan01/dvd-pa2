let angle = 0;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('art-generation');
    background(255);
}

function draw() {
    translate(width / 2, height / 2);
    rotate(angle);
    stroke(0);
    noFill();
    ellipse(0, 0, 200, 200);
    line(0, 0, 100, 0);
    angle += 0.01;
}