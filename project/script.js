const body = document.body;

let grid = document.createElement('div');
body.append(grid);
grid.className = 'grid';

for(let i = 0; i < 256; i++){
    let divBox = document.createElement('div');
   
    divBox.classList.add('box');
    grid.appendChild(divBox);
}

const paintBox = document.querySelectorAll(".box");
let nodeArray = Array.from(paintBox);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false) 

nodeArray.forEach((box)=>{
    box.addEventListener('mousemove', ()=>{
        if(mouseDown === true){
            box.classList.add("painted");
        }
    })
})


