'use strict';

let cells = document.getElementsByClassName('cells'),
    gameField = document.getElementById('game'),
    resetButton = document.getElementById('reset'),
    step = 0,
    player = 'X',
    message = document.getElementById('message'),
    dataX = [],
    dataO = []
let field = document.getElementById('game');
let canvas = document.createElement('canvas');


const winArr = ["01234", "56789", "1011121314", "1516171819", "2021222324",
    "05101520", "16111621", "27121722", "38131823", "49141924", "06121824", "48121620"];


message.innerText = player;


//create elements

for (let num = 0; num < 25; num++) {
    gameField.innerHTML += `<div class="cells" data-cell="${num}"></div>`;
}
// defining of element on what we click
gameField.addEventListener('click', eventBlock);

function eventBlock(event) {
    let targetBlock = event.target;
    let num = +targetBlock.getAttribute('data-cell');
    if (!targetBlock.textContent) {
        targetBlock.innerHTML = player;
        //create two arrays
        player === 'X' ? dataX.push(num) : dataO.push(num);
        if ((dataX.length > 4 || dataO.length > 4) &&
            (checkWin(dataO) || checkWin(dataX))) {
            gameField.removeEventListener('click', eventBlock);
            return (message.innerText = player + ' ' + 'has won');
        }
        step++;
        changePlayer();
    }
    //show message about player's step
    step === 25 ? message.innerText = 'standoff' : message.innerText = player;
}

function changePlayer() {
    player === 'X' ? (player = 'O') : (player = 'X');
}

//clear field and arrays with data
resetButton.addEventListener('click', function () {
    for (let cell = 0; cell < cells.length; cell++) {
        cells[cell].innerText = '';
    }
    dataX = [];
    dataO = [];
    player = 'X';
    step = 0;
    message.innerText = player;
    removeCanvas();
    gameField.addEventListener('click', eventBlock);

});

function checkWin(arr) {
    let winStrings = arr.join('');
    let winIndex = winArr.indexOf(winStrings);
    let winner;
    if (winIndex !== -1) {
        for (let index = 0; index < winArr.length; index++) {
            winner = winArr[winIndex];
        }
        if (winner === winArr[0]) {
            line2();
            return true;
        }
        if (winner === winArr[10]) {
            line1();
            return true;
        }
        if (winner === winArr[1]) {
            line5();
            return true;
        }
        if (winner === winArr[2]) {
            line8();
            return true;
        }
        if (winner === winArr[3]) {
            line9();
            return true;
        }
        if (winner === winArr[4]) {
            line10();
            return true;
        }
        if (winner === winArr[5]) {
            line3();
            return true;
        }
        if (winner === winArr[6]) {
            line4();
            return true;
        }
        if (winner === winArr[7]) {
            line11();
            return true;
        }
        if (winner === winArr[8]) {
            line6();
            return true;
        }
        if (winner === winArr[9]) {
            line12();
            return true;
        }
        if (winner === winArr[11]) {
            line7();
            return true;
        }
        // return true;
    }
}

//remove canvas
function removeCanvas() {
    field.removeChild(canvas);
}

// drawing winning lines
function line1() {
    canvas.className = 'c1';
    canvas.setAttribute('width', '300');
    canvas.setAttribute('height', '300');
    field.insertBefore(canvas, field.children[0]);
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 250, 250);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '3';
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 300);
    ctx.stroke();
}

function line2() {
    canvas.className = 'c1';
    canvas.setAttribute('width', '300');
    canvas.setAttribute('height', '300');
    field.insertBefore(canvas, field.children[0]);
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 250, 250);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '3';
    ctx.moveTo(0, 30);
    ctx.lineTo(300, 30);
    ctx.stroke();
}

function line3() {
    canvas.className = 'c1';
    canvas.setAttribute('width', '300');
    canvas.setAttribute('height', '300');
    field.insertBefore(canvas, field.children[0]);
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 250, 250);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '3';
    ctx.moveTo(30, 0);
    ctx.lineTo(30, 300);
    ctx.stroke();
}

function line4() {
    canvas.className = 'c1';
    canvas.setAttribute('width', '300');
    canvas.setAttribute('height', '300');
    field.insertBefore(canvas, field.children[0]);
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 250, 250);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '3';
    ctx.moveTo(90, 0);
    ctx.lineTo(90, 300);
    ctx.stroke();
}

function line5() {
    canvas.className = 'c1';
    canvas.setAttribute('width', '300');
    canvas.setAttribute('height', '300');
    field.insertBefore(canvas, field.children[0]);
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 250, 250);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '3';
    ctx.moveTo(0, 90);
    ctx.lineTo(300, 90);
    ctx.stroke();
}

function line6() {
    canvas.className = 'c1';
    canvas.setAttribute('width', '300');
    canvas.setAttribute('height', '300');
    field.insertBefore(canvas, field.children[0]);
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 250, 250);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '3';
    ctx.moveTo(215, 0);
    ctx.lineTo(215, 300);
    ctx.stroke();
}

function line7() {
    canvas.className = 'c1';
    canvas.setAttribute('width', '300');
    canvas.setAttribute('height', '300');
    field.insertBefore(canvas, field.children[0]);
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 250, 250);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '3';
    ctx.moveTo(300, 0);
    ctx.lineTo(0, 300);
    ctx.stroke();
}

function line8() {
    canvas.className = 'c1';
    canvas.setAttribute('width', '300');
    canvas.setAttribute('height', '300');
    field.insertBefore(canvas, field.children[0]);
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 250, 250);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '3';
    ctx.moveTo(0, 150);
    ctx.lineTo(300, 150);
    ctx.stroke();
}

function line9() {
    canvas.className = 'c1';
    canvas.setAttribute('width', '300');
    canvas.setAttribute('height', '300');
    field.insertBefore(canvas, field.children[0]);
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 250, 250);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '3';
    ctx.moveTo(0, 215);
    ctx.lineTo(300, 215);
    ctx.stroke();
}

function line10() {
    canvas.className = 'c1';
    canvas.setAttribute('width', '300');
    canvas.setAttribute('height', '300');
    field.insertBefore(canvas, field.children[0]);
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 250, 250);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '3';
    ctx.moveTo(0, 275);
    ctx.lineTo(300, 275);
    ctx.stroke();
}

function line11() {
    canvas.className = 'c1';
    canvas.setAttribute('width', '300');
    canvas.setAttribute('height', '300');
    field.insertBefore(canvas, field.children[0]);
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 250, 250);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '3';
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 300);
    ctx.stroke();
}

function line12() {
    canvas.className = 'c1';
    canvas.setAttribute('width', '300');
    canvas.setAttribute('height', '300');
    field.insertBefore(canvas, field.children[0]);
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 250, 250);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '3';
    ctx.moveTo(275, 0);
    ctx.lineTo(275, 300);
    ctx.stroke();
}



