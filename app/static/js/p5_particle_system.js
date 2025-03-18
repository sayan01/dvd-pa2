let particles = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('particle-system');
}

function draw() {
    background(0);
    for (let particle of particles) {
        particle.update();
        particle.show();
    }
}

function mouseDragged() {
    particles.push(new Particle(mouseX, mouseY));
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = random(-2, 2);
        this.vy = random(-2, 2);
        this.alpha = 255;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }

    show() {
        noStroke();
        fill(255, this.alpha);
        ellipse(this.x, this.y, 16);
    }
}