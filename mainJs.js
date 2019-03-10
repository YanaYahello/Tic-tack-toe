var cells = document.getElementsByClassName('cells'),
    resetButton = document.getElementById('reset'),
    step = 0,
    player = 'X',
    message = document.getElementById('message'),
    winCombinations = [
        [1, 2, 3],
        [1, 4, 7],
        [1, 5, 9],
        [2, 5, 8],
        [3, 5, 7],
        [3, 6, 9],
        [4, 5, 6],
        [7, 8, 9]
    ],
    dataX = [],
    dataO = [];


// add event listener to every cell переписать через форич
for (let cell = 0; cell < cells.length; cell++) {
    cells[cell].addEventListener('click', currentStep);
}

function currentStep() {
    let numberOfCell = +this.getAttribute('data-cell');
    //check cell's content if no content => player
    if (!this.textContent) {
        this.innerText = player;
        //after adding value in cell check this value and made arrays with data X or O
        player === 'X' ? dataX.push(numberOfCell) : dataO.push(numberOfCell);
        //array is passed on function checkWin
        if(
            (dataX.length > 2 || dataO.length > 2) &&
            (checkWin(dataO, numberOfCell) || checkWin(dataX, numberOfCell))
        ){
            for (let cell = 0; cell < cells.length; cell++) {
                cells[cell].removeEventListener('click', currentStep);
            }
            return (message.innerText = player + ' '+'has won');
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
    for ( let cell = 0; cell < cells.length; cell++) {
        cells[cell].innerText = '';
    }
    dataX =[];
    dataO =[];
    player = 'X';
    step = 0;
    message.innerText = player;
    for (let cell = 0; cell < cells.length; cell++) {
        cells[cell].addEventListener('click', currentStep);
    }
});
// winning combination calculation
function checkWin(arr,num) {
    for( let arrays = 0; arrays < winCombinations.length; arrays++ ){
        let someWinArr = winCombinations[arrays];
        let count = 0;
        //sort out arrays from winCombinations by first value
        if(someWinArr.indexOf(num)!== -1){
            //look through sorted arrays
            for( let win = 0; win < someWinArr.length; win++ ){
                //comparing sorted arrays with arrays which get from the currentStep function
                if(arr.indexOf(someWinArr[win])!== -1){
                    count ++;
                    if(count === 3){
                        let attArr = [];
                        let elements;
                        for ( let cell = 0; cell < cells.length; cell++) {
                            elements = cells[cell].getAttribute('data-cell');
                            attArr.push(elements);
                        }

                        return true;
                    }
                }
            }
            count = 0;
        }
    }
}

// canvas
// function canvas() {
//     let canvas = document.getElementById('c1');
//     let ctx = canvas.getContext('2d');
//     ctx.strokeStyle = "red";
//     ctx.lineWidth = 3;
//     ctx.moveTo(0 ,0);
//     ctx.lineTo(50,50);
//     ctx.stroke();
//
// }
