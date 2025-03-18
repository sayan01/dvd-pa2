let data;

function preload() {
    data = loadJSON('/api/population_data');
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('data-visualization');
    noLoop();
}

function draw() {
    background(255);
    let labels = data.labels;
    let current = data.current;
    let projected = data.projected;
    let maxVal = max([...current, ...projected]);
    let barWidth = width / labels.length;

    for (let i = 0; i < labels.length; i++) {
        let x = i * barWidth;
        let currentHeight = map(current[i], 0, maxVal, 0, height / 2);
        let projectedHeight = map(projected[i], 0, maxVal, 0, height / 2);

        fill(0, 0, 255, 150);
        rect(x, height / 2 - currentHeight, barWidth / 2, currentHeight);

        fill(255, 0, 0, 150);
        rect(x + barWidth / 2, height / 2 - projectedHeight, barWidth / 2, projectedHeight);

        fill(0);
        textAlign(CENTER, CENTER);
        text(labels[i], x + barWidth / 2, height / 2 + 20);
    }
}