
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
let hue = 0;
let direction = true;
let linear = true;

// Function to draw
function draw (e) {
  if(!isDrawing) {
    return ;
  }
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;

  if(hue>=360){
    hue = 0;
  }

  if(ctx.lineWidth >= 75 || ctx.linewidth <= 1) {
    direction = !direction;
  }

  if(!linear){
    if(direction){
      ctx.lineWidth++;
    } else {
      ctx.lineWidth = 75;
    }
  }
}

// Some listeners
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  direction = true;
  ctx.lineWidth = 1;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


// Button logic

const progresiveButton = document.querySelector('#progBut');
const uniformButton = document.querySelector('#uniBut');

progresiveButton.addEventListener('click', () => {
  linear = false;
  uniformButton.className = "";
  progresiveButton.className = "active";
});
uniformButton.addEventListener('click', () => {
  linear = true;
  progresiveButton.className = "";
  uniformButton.className = "active";
});
