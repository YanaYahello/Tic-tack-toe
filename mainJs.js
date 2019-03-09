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

//add event listener to every cell переписать через форич
for (var cell = 0; cell < cells.length; cell++) {
    cells[cell].addEventListener('click', currentStep);
}

//
function currentStep() {
    var numberOfCell = +this.getAttribute('data-cell');
    //проверяем или в ячейке есть текст если нет то текущее значение бдет player
    if (!this.textContent) {
        this.innerText = player;
        //after adding value in cell check this value and made arrays with data X or O
        player === 'X' ? dataX.push(numberOfCell) : dataO.push(numberOfCell);
        //cмассив будет передаватся в функцию checkWin для определения выйграшной комбинации
        if(
            (dataX.length > 2 || dataO.length > 2) &&
            (checkWin(dataO, numberOfCell) || checkWin(dataX, numberOfCell))
        ){
            for (var cell = 0; cell < cells.length; cell++) {
                cells[cell].removeEventListener('click', currentStep);
            }
            return (message.innerText = player + 'has won');
        }
        changePlayer();
        step++;
        //show message about player's step
        step === 9 ? message.innerText = 'standoff' : message.innerText = player;
    }
}

function changePlayer() {
    player === 'X' ? (player = 'O') : (player = 'X');
}

//clear field and arrays with data переписать через форич
resetButton.addEventListener('click', function () {
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
    dataX =[];
    dataO =[];
    player = 'X';
    step = 0;
    message.innerText = player;
    for (var cell = 0; cell < cells.length; cell++) {
        cells[cell].addEventListener('click', currentStep);
    }
});
//who win
function checkWin(arr,num) {
    //foreach
    for( var j = 0; j < winCombinations.length; j++ ){
        var someWinArr = winCombinations[j];
        var count = 0;
        //проверяем масив из массива , в масиве ищим переданое число
        if(someWinArr.indexOf(num)!== -1){
            //проходим по всем переменнім в вібраном нами масиву
            for( var k = 0; k < someWinArr.length; k++ ){
                //сравниванием выбраные массивы с тем котрый передали в функцию
                if(arr.indexOf(someWinArr[k])!== -1){
                    count ++;
                    if(count === 3){
                        return true;
                    }
                }
            }
            count = 0;
        }
    }
}
