const sketchContainer = document.querySelector('#sketch');
const resizerBtn = document.querySelector('#resizer-btn');
const newSketchSize = document.querySelector('input');

let sketchSize = 16;
let brushColor = 'gray';

const setSketch = (size) => {
  return document.documentElement.style.setProperty('--sketch-size', `${size}`);
};

const createDivSketch = () => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('sketch-item');

  return newDiv;
};

const cleanSketch = () => {
  while (sketchContainer.hasChildNodes())
    sketchContainer.removeChild(sketchContainer.lastChild);
};

const showSketch = (size) => {
  setSketch(size);

  if (sketchContainer.hasChildNodes()) {
    cleanSketch();
    for (let i = 1; i <= size * size; i++)
      sketchContainer.appendChild(createDivSketch());
  } else {
    for (let i = 1; i <= size * size; i++)
      sketchContainer.appendChild(createDivSketch());
  }
};

showSketch(sketchSize);

const drawSketch = () => {
  const sketchItem = Array.from(document.querySelectorAll('.sketch-item'));

  sketchItem.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = `${brushColor}`;
    });
  });
};

drawSketch();

const getColor = () => {
  const optColor = [...document.querySelectorAll('.color-opt')];
  optColor.forEach((color) => {
    color.addEventListener('click', (e) => {
      brushColor = e.target.id;
    });
  });
};

getColor();

const reSetSketch = () => {
  sketchSize = newSketchSize.value * 1;
  showSketch(sketchSize);
  drawSketch();
};

resizerBtn.addEventListener('click', reSetSketch);
