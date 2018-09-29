class TriLine {
  constructor(x,y,rot) {
    this.x = x;
    this.y = y;
    this.rotation = rot || 0;
    this.color = [255,0,0]
  }
  update() {
    this.draw();
    this.move();
  }
  draw() {
    let sCA = this.color;
    stroke(sCA[0], sCA[1], sCA[2]);
    strokeWeight(4);
    line(this.x, this.y, this.x + (cos(this.rotation) * 10), this.y - 17 + (sin(this.rotation) * 10));
    line(this.x, this.y, this.x + 15 + (cos(this.rotation) * 10), this.y + 10 + (sin(this.rotation) * 10));
    line(this.x, this.y, this.x - 15 + (cos(this.rotation) * 10), this.y + 10 + (sin(this.rotation) * 10));
  }
  move() {
    this.rotation += 0.1;
    if (this.rotation >= 360) {
      this.rotation = 0;
    }
  }
  changeColor(r, g, b) {
    this.color = [r, g, b];
  }

}

function createObjects(objectHolder, spacingX, spacingY) {
  let newRot = 0;
  for (let i = 0; i < Math.round(500 / spacingY); i++) {
    for (let j = 0; j < Math.round(500 / spacingX); j++) {
      let newObject = new TriLine(j * spacingX + 10, i * spacingY + 10, newRot);
      objectHolder.push(newObject);
      newRot += 0.4;
    }
  }
  console.log(objectHolder.length + " objects are used.");
}


var triLineA = [];
createObjects(triLineA, 30, 30);

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);
  let newColor = 0;
  let rgbo = 0;
  for (let i = 0; i < triLineA.length; i++) {
    rgbo++;
    if (rgbo >= 4) {
      rgbo = 1;
    }
    let randomColor = Math.ceil(Math.random() * 255);
    triLineA[i].update();
    triLineA[i].changeColor(triLineA[i].rotation, randomColor, randomColor);
  }

}
