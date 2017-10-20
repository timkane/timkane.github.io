function setup() {
    var canvas = createCanvas(480, 480);
    canvas.parent('sketch-holder1');
    background('#4ba185')
    }

function draw() {
    if(mouseIsPressed){
        fill(0);
    } else{
        fill(random(0, 255), random(0, 255), random(0, 255));
    }
    ellipse(mouseX, mouseY, 80, 80)
    }