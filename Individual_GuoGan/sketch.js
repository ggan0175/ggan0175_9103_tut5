let numCircles = 20;  // Number of circular shapes
let circles = [];     // Array to store circle objects

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  createNonOverlappingCircle();
}

function draw() {
  background(220);
  drawBackground();  // Draw the dynamic background
  for (const circle of circles) {
    circle.display();
    circle.move();   // Update the position, rotation, and scaling of each circle
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  createNonOverlappingCircle();
}

// Function to create circles ensuring they do not overlap
function createNonOverlappingCircle() {
  circles = [];  // Reset circles array to avoid overlap when window is resized
  while (circles.length < numCircles) {
    let diameter = random(130, 200);
    let circleColor = color(random(255), random(255), random(255));
    let numSmallCircles = round(random(30, 50));
    let smallCircleColor = color(random(255), random(255), random(255));
    let numLayers = 5;
    let tempCircle = new Circle(random(width), random(height), diameter, circleColor, numSmallCircles, smallCircleColor, numLayers);

    if (!checkOverlap(tempCircle)) {
      circles.push(tempCircle);
    }
  }
}

// Check if a circle overlaps with any existing circle
function checkOverlap(tempCircle) {
  for (let circle of circles) {
    let d = dist(tempCircle.x, tempCircle.y, circle.x, circle.y);
    if (d < (tempCircle.diameter / 2 + circle.diameter / 2) + 5) {
      return true;
    }
  }
  return false;
}

class Circle {
  constructor(x, y, diameter, circleColor, numSmallCircles, smallCircleColor, numLayers) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.circleColor = circleColor;
    this.numSmallCircles = numSmallCircles;
    this.smallCircleColor = smallCircleColor;
    this.numLayers = numLayers;
    this.speed = random(3, 6);
    this.angle = 0;
    this.scale = 1;
    this.scaleSpeed = random(0.001, 0.005);
    this.gradient = [circleColor, color(random(255), random(255), random(255))];
  }

  // Display the circle with all its properties
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    scale(this.scale);
    translate(-this.x, -this.y);
    // Create a color gradient effect within the main circle
    for (let i = 0; i < 1; i += 0.1) {
      fill(lerpColor(this.gradient[0], this.gradient[1], i));
      ellipse(this.x, this.y, this.diameter * (1 - i));
    }
    // Draw the central disk and smaller circles with rotation and scaling
    for (let l = 1; l <= this.numLayers; l++) {
      let layerRadius = this.diameter / 2 * (1 - l / (this.numLayers + 5));
      for (let i = 0; i < this.numSmallCircles; i++) {
        let angle = (360 / this.numSmallCircles * i);
        let sx = this.x + cos(angle) * layerRadius;
        let sy = this.y + sin(angle) * layerRadius;
        fill(this.smallCircleColor);
        ellipse(sx, sy, 10);
      }
    }
    pop();
  }

  // Update the movement, rotation, and scaling of the circle
  move() {
    this.x += this.speed;
    if (this.x >= width + this.diameter / 2) {
      this.x = -this.diameter / 2;
    }
    this.angle += 1;
    this.scale += this.scaleSpeed;
    if (this.scale >= 1.2 || this.scale <= 0.8) {
      this.scaleSpeed = -this.scaleSpeed;
    }
  }
}

// Draw a dynamic background with a subtle moving gradient
function drawBackground() {
  let bgY = 0;
  bgY += 0.5;
  for (let i = 0; i < height; i++) {
    stroke(lerpColor(color(102, 153, 255), color(255, 102, 153), (i + bgY) % height / height));
    line(0, i, width, i);
  }
}

function mouseMoved() {
  circles.forEach(circle => {
    let d = dist(mouseX, mouseY, circle.x, circle.y);
    if (d < circle.diameter / 2) {
      circle.diameter += 5;
    } else {
      circle.diameter -= 5;
    }
  });
}
