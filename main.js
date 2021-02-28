const board = []
let score


$(function(){
    newGame();
})


function newGame(){
    init();
    generateOneNumber()
    generateOneNumber()
}

function init(){
    for(let i =0;i<4;i++){
        board[i]= [];
        for(let j=0;j<4;j++){
            board[i][j] =0;
            let gridCell = $('#grid-cell-'+i+'-'+j)
            gridCell.css('top',getPosTop(i,j))
            gridCell.css('left',getPosLeft(i,j))
        }
    }
    updateBoardView()
    score =0
}

function updateBoardView(){
    $('.number-cell').remove()
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            $('#grid-container').append("<div class='number-cell' id='number-cell-"+i+'-'+j+"'></div>")
            let numberCell = $('#number-cell-'+i+'-'+j)
            if(board[i][j]===0){
                numberCell.css('width','0px')
                numberCell.css('height','0px')
                numberCell.css('top',getPosTop(i,j)+50)
                numberCell.css('left',getPosLeft(i,j)+50)
            }else{
                numberCell.css('width','100px')
                numberCell.css('height','100px')
                numberCell.css('top',getPosTop(i,j))
                numberCell.css('left',getPosLeft(i,j))
                numberCell.css('background-color',getNumberBackgroundColor(board[i][j]))
                numberCell.css('color',getNumberColor(board[i][j]))
                numberCell.text(board[i][j])
            }
        }
    }
}

function generateOneNumber(){
    let randomX = parseInt(Math.floor(Math.random()*4))
    let randomY = parseInt(Math.floor(Math.random()*4))
    while(true){
        if(board[randomX][randomY]===0){
            break
        }else{
            randomX = parseInt(Math.floor(Math.random()*4))
            randomY = parseInt(Math.floor(Math.random()*4))
        }
    }
    let randomNumber = Math.random()<0.5? 2:4

    board[randomX][randomY] = randomNumber
    showNumberWithAnimation(randomX,randomY,randomNumber)
}
