function setup() {
    var canvas = createCanvas(480, 480);
    canvas.parent('sketch-holder2');
    background(0, 0, 0,)
    }

function draw() {
    if(mouseIsPressed){
        background(random(0, 255), random(0, 255), random(0, 255), 10);
        fill(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
        triangle(mouseX - 40, mouseY + 40, mouseX, mouseY - 40, mouseX + 40, mouseY + 40);
    } else{
        fill(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
    }
    triangle(mouseX - 40, mouseY + 40, mouseX, mouseY - 40, mouseX + 40, mouseY + 40);
    }