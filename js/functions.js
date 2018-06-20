
//https://medium.freecodecamp.org/sunday-with-canvas-element-and-javascript-38ae80e0fbeb

// Canvas initial settings
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineWidth = 1;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// DRAW

// Initial not drawing
let isDrawing = false;

// Position when draw starts
let lastX = 0;
let lastY = 0;

// Function to draw
function draw (e) {
  if(!isDrawing) return ;
  console.log(e);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Some listeners
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
