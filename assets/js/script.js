const sketchContainer = document.querySelector('#sketch');
const resizerBtn = document.querySelector('#resizer-btn');
const newSketchSizeBox = document.querySelector('input');
const modalDialog = document.querySelector('.modal-dialog');
const openModal = document.querySelector('#resize-btn');
const resetBtn = document.querySelector('#reset-btn');
const dragModeBtn = document.querySelector('#drag-btn');
const githubLink = document.querySelector('#git-image');

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

resizerBtn.addEventListener('click', () => {
  sketchSize = newSketchSizeBox.value * 1;
  showSketch(sketchSize);
  modalDialog.style.top = '-100vh';
  newSketchSizeBox.value = '';
  drawSketch();
});

const resetSketch = () => {
  showSketch(sketchSize);
  drawSketch();
};

resetBtn.addEventListener('click', resetSketch);

openModal.addEventListener('click', () => {
  modalDialog.style.top = '0';
});

const openGitSite = () => {
  window.open('https://github.com/kcotrinam92');
};
githubLink.addEventListener('click', openGitSite);
