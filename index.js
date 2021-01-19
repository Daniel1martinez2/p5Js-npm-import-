const p5 = require('p5');
const pLib = require('p5');
let sketch = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(500, 500);
  }
  p.draw = () => {
    p.background(0);
    p.ellipse(200, 200, 50, 50);
  }
}
let p5js = new p5(sketch);