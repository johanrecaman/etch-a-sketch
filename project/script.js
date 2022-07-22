const body = document.body;
const bodyDiv = document.querySelector('.bodyDiv');
const buttonEraser = document.querySelector('#eraser');
const buttonColor = document.querySelector('#color');
const buttonClear = document.querySelector('#clear');

let isColor = true;
let isEraser = false;

let grid = document.createElement('div');
bodyDiv.append(grid);
grid.className = 'grid';

for(let i = 0; i < 256; i++){
    let divBox = document.createElement('div');
   
    divBox.classList.add('box');
    grid.appendChild(divBox);
}

buttonEraser.addEventListener('click', ()=>{
    isEraser = true;
    isColor = false;
    console.log(isEraser);
})
buttonColor.addEventListener('click',()=>{
    isColor = true;
    isEraser = false;
})

const paintBox = document.querySelectorAll(".box");
let nodeArray = Array.from(paintBox);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

nodeArray.forEach((box)=>{
        box.addEventListener('mousemove', ()=>{
            if(mouseDown === true){
                if(isEraser === false){
                    box.classList.add("painted");
                }
                else{
                    box.classList.remove("painted");
                }
            }
        }) 
        buttonClear.addEventListener('click', ()=>{
            box.classList.remove('painted');
        })   
})