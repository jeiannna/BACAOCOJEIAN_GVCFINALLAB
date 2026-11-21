// Orbiting Dot Animation using p5.js
// Controls:
//   UP arrow - increase orbit speed
//   DOWN arrow - decrease orbit speed
//   SPACEBAR - pause/resume animation

let centerX, centerY;    // Center of the canvas
let radius = 150;        // Radius of the orbit circle
let angle = 0;           // Current angle in radians
let angleSpeed = 0.02;   // Speed at which angle increases
let paused = false;      // Pause state

function setup() {
  createCanvas(400, 400);
  centerX = width / 2;   // Set center X coordinate
  centerY = height / 2;  // Set center Y coordinate
  angle = 0;
  textSize(14);
  noStroke();
}

function draw() {
  background(220);

  // Display title
  fill(0);
  textAlign(CENTER);
  text("Orbiting Dot Animation", centerX, 30);

  // Display control instructions
  textSize(12);
  textAlign(LEFT);
  text("Controls:", 10, height - 80);
  text("UP Arrow: Increase Speed", 10, height - 60);
  text("DOWN Arrow: Decrease Speed", 10, height - 45);
  text("SPACEBAR: Pause / Resume", 10, height - 30);

  // Update angle if not paused
  if (!paused) {
    angle += angleSpeed;
  }

  // Calculate dot position using sine and cosine
  let x = centerX + radius * cos(angle);
  let y = centerY + radius * sin(angle);

  // Draw orbit path
  noFill();
  stroke(100);
  ellipse(centerX, centerY, radius * 2, radius * 2);

  // Draw the dot
  fill(255, 0, 0);
  noStroke();
  ellipse(x, y, 20, 20);

  // Display current speed
  fill(0);
  textAlign(RIGHT);
  text("Speed: " + angleSpeed.toFixed(3), width - 10, height - 10);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    angleSpeed += 0.005;      // Increase speed
  } else if (keyCode === DOWN_ARROW) {
    angleSpeed -= 0.005;      // Decrease speed
    if (angleSpeed < 0) angleSpeed = 0; // Prevent negative speed
  } else if (key === ' ') {
    paused = !paused;         // Toggle pause/resume
  }
}
