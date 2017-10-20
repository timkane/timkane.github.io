function setup() {
    var canvas = createCanvas(480, 480);
    canvas.parent('sketch-holder2');
    background(0, 0, 0,)
    }

function draw() {
    if(mouseIsPressed){
        fill(0);
    } else{
        fill(random(0, 255), random(0, 255), random(0, 255));
    }
    ellipse(mouseX, mouseY, 80, 80)
    }