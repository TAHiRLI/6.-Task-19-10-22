// buttons
let resetBtn = document.getElementById('btn-reset');
let saveBtn = document.getElementById('btn-save');


//boxes
let box = document.getElementById('box');
let ball = document.getElementById('ball');



let step  = 10;

// Events for buttons 
resetBtn.addEventListener('click', (e) => {
    ball.style.left = `${Math.floor(box.clientWidth - ball.clientWidth) / 2}px`;
    ball.style.top = `${Math.floor(box.clientHeight - ball.clientHeight) / 2}px`;

});

saveBtn.addEventListener('click', function(e){
//inputs
let height = document.getElementById('boxHeight').value;
let width = document.getElementById('boxWidth').value;
let diameter = document.getElementById('ballSize').value;
let boxColor = document.getElementById('boxColor').value;
let ballColor = document.getElementById('ballColor').value;
let stepPerClick = document.getElementById('step').value;
 
step  = parseInt(stepPerClick);

console.log(boxColor);
console.log(ballColor);

box.style.backgroundColor = `${boxColor}`
box.style.width =` ${width}px`;
box.style.height =` ${height}px`;
ball.style.height =` ${diameter}px`;
ball.style.width = ` ${diameter}px`;
ball.style.backgroundColor  = `${ballColor}`;
ball.style.boxShadow = `0 0px 15px  ${ballColor}`

})
saveBtn.click();
resetBtn.click();


document.body.addEventListener('keydown', function (e) {
    if (e.key == "ArrowUp") {
        if (parseInt(ball.style.top) > step) {
            ball.style.top = `${parseInt(ball.style.top) - step}px `;
        }

    }
    if (e.key == "ArrowDown") {
        if (parseInt(ball.style.top) < box.clientHeight  - ball.clientHeight -step) {
            ball.style.top = `${parseInt(ball.style.top) + step}px `;
        }

    }
    if (e.key == "ArrowLeft") {
        if (parseInt(ball.style.left) > step) {
            ball.style.left = `${parseInt(ball.style.left) - step}px `;
        }
    }
    if (e.key == "ArrowRight") {
        if (parseInt(ball.style.left) < box.clientWidth  - ball.clientWidth -step)
            ball.style.left = `${parseInt(ball.style.left) + step}px `;
    }
})



