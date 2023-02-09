export const mouse = {
  x : 0,
  y : 0,
  isDown : false
};

document.addEventListener('mousemove', (event) => {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

document.addEventListener('mousedown', (event) => {
  mouse.isDown = true;
});

document.addEventListener('mouseup', (event) => {
  mouse.isDown = false;
});