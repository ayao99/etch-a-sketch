let width = 16;
let newDimensions;
const grid = document.querySelector('.container');
const reset = document.querySelector('#reset');

function populate(width) {
    for (i = 0; i < Math.pow(width, 2); i++){
        const box = document.createElement('div');
        grid.appendChild(box);
        box.className = 'square';
        box.style.height = `${35/width}vw`;
        box.style.width = `${61/width}vw`;
        box.addEventListener('mouseover', function(e) {
            e.target.classList.add('colored');
        });
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

populate(width);
const boxes = document.querySelectorAll('.square');

reset.addEventListener('click', function () {
    boxes.forEach(box => {
        box.classList.remove('colored');
    });
    newDimensions = Number(prompt('Enter how many boxes you want on an axis (i.e. 64 for a 64x64 grid)'));
    removeAllChildNodes(grid);
    populate(newDimensions);
});