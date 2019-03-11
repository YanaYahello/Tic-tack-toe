'use strict';
let cells = document.getElementsByClassName('cells'),
    resetButton = document.getElementById('reset'),
    step = 0,
    player = 'X',
    message = document.getElementById('message'),
    dataX = [],
    dataO = [];


const winCombinations = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9]
];


// add event listener to every cell
for (let cell = 0; cell < cells.length; cell++) {
    cells[cell].addEventListener('click', currentStep);
}

function currentStep() {
    let numberOfCell = +this.getAttribute('data-cell');
    //check cell's content if no content => player =X;
    if (!this.textContent) {
        this.innerText = player;
        //after adding value in cell check this value and made arrays with data X or O
        player === 'X' ? dataX.push(numberOfCell) : dataO.push(numberOfCell);
        //array is passed on function checkWin
        if (
            (dataX.length > 2 || dataO.length > 2) &&
            (checkWin(dataO, numberOfCell) || checkWin(dataX, numberOfCell))
        ) {
            for (let cell = 0; cell < cells.length; cell++) {
                cells[cell].removeEventListener('click', currentStep);
            }
            return (message.innerText = player + ' ' + 'has won');
        }
        //change player
        player === 'X' ? (player = 'O') : (player = 'X');
        step++;
        //show message about player's step
        step === 9 ? message.innerText = 'standoff' : message.innerText = player;
    }
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
    for (let cell = 0; cell < cells.length; cell++) {
        cells[cell].addEventListener('click', currentStep);
        cells[cell].classList.remove('winner');
    }

});

// winning combination calculation
function checkWin(arr, num) {
    for (let arrays = 0; arrays < winCombinations.length; arrays++) {
        let someWinArr = winCombinations[arrays];
        let count = 0;
        //sort out arrays from winCombinations by first value
        if (someWinArr.indexOf(num) !== -1) {
            //look through sorted arrays
            for (let win = 0; win < someWinArr.length; win++) {
                //comparing sorted arrays with arrays which we has got from the currentStep function
                if (arr.indexOf(someWinArr[win]) !== -1) {
                    count++;
                    if (count === 3) {
                        // add class for winner combination
                        for (let cell = 0; cell < cells.length; cell++) {
                            let attr = cells[cell].attributes;
                            for (let someAttr = 0; someAttr < attr.length; someAttr++) {
                                if (+attr[someAttr].value === someWinArr[0] || +attr[someAttr].value === someWinArr[1] || +attr[someAttr].value === someWinArr[2]) {
                                    cells[cell].classList.add('winner');

                                }
                            }
                        }
                        //add line by canvas
                        // if (someWinArr[0] === 1 || someWinArr[2] === 5 || someWinArr[0] === 9) {
                        //     line1();
                        //     return true;
                        // }
                        // if (someWinArr[0] === 1 || someWinArr[2] === 2 || someWinArr[0] === 3) {
                        //     line2();
                        //     return true;
                        // }
                        // if (someWinArr[0] === 1 || someWinArr[2] === 4 || someWinArr[0] === 7) {
                        //     line3();
                        //     return true;
                        // }
                        // if (someWinArr[0] === 2 || someWinArr[2] === 5 || someWinArr[0] === 8) {
                        //     line4();
                        //     return true;
                        // }
                        // if (someWinArr[0] === 4 || someWinArr[2] === 5 || someWinArr[0] === 6) {
                        //     line5();
                        //     return true;
                        // }
                        // if (someWinArr[0] === 3 || someWinArr[2] === 6 || someWinArr[0] === 9) {
                        //     line6();
                        //     return true;
                        // }
                        // if (someWinArr[0] === 3 || someWinArr[2] === 5 || someWinArr[0] === 7) {
                        //     line7();
                        //     return true;
                        // }
                        // if (someWinArr[0] === 7 || someWinArr[2] === 8 || someWinArr[0] === 9) {
                        //     line8();
                        //     return true;
                        // }

                        return true;
                    }
                }
            }
        }
        count = 0;
    }

}
//winner lines
// let canvas = document.getElementById('c1');
// let ctx = canvas.getContext('2d');
//
// function line1() {
//     ctx.strokeStyle = 'red';
//     ctx.lineWidth = '3';
//     ctx.moveTo(0, 0);
//     ctx.lineTo(250, 250);
//     ctx.stroke();
// }
//
// function line3() {
//     ctx.strokeStyle = 'red';
//     ctx.lineWidth = '3';
//     ctx.moveTo(15, 0);
//     ctx.lineTo(15, 250);
//     ctx.stroke();
// }
//
// function line4() {
//     ctx.strokeStyle = 'red';
//     ctx.lineWidth = '3';
//     ctx.moveTo(50, 0);
//     ctx.lineTo(50, 250);
//     ctx.stroke();
// }
//
// function line2() {
//     ctx.strokeStyle = 'red';
//     ctx.lineWidth = '3';
//     ctx.moveTo(0, 15);
//     ctx.lineTo(250, 15);
//     ctx.stroke();
// }
//
// function line5() {
//     ctx.strokeStyle = 'red';
//     ctx.lineWidth = '3';
//     ctx.moveTo(0, 50);
//     ctx.lineTo(250, 50);
//     ctx.stroke();
// }
//
// function line6() {
//     ctx.strokeStyle = 'red';
//     ctx.lineWidth = '3';
//     ctx.moveTo(85, 0);
//     ctx.lineTo(85, 250);
//     ctx.stroke();
// }
//
// function line7() {
//     ctx.strokeStyle = 'red';
//     ctx.lineWidth = '3';
//     ctx.moveTo(100, 0);
//     ctx.lineTo(0, 100);
//     ctx.stroke();
// }
//
// function line8() {
//     ctx.strokeStyle = 'red';
//     ctx.lineWidth = '3';
//     ctx.moveTo(0, 85);
//     ctx.lineTo(250, 85);
//     ctx.stroke();
// }



