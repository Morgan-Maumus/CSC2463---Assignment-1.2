function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(255,255, 255);
  
  const b = color(0, 0, 255, 80);
  fill(b);
  noStroke();
  circle(100,175,150);
  
  const r = color(255, 0, 0, 80);
  fill(r);
  noStroke();
  circle(150,100,150);
  
  const g = color(0, 255, 0, 80);
  fill(g);
  noStroke();
  circle (200, 175, 150);
}
