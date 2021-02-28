var board = new Array()
//
// function getNumberBackgroundColor(number){
//     if(number===2){
//         return "#eee4da"
//     }else if(number ===4){
//         return "#ede0c8"
//     }else if(number ===8){
//         return "#f2b179"
//     }else if(number ===16){
//         return "#f59563"
//     }else if(number ===32){
//         return "#f67c5f"
//     }else if(number ===64){
//         return "#f65e3b"
//     }else if(number ===128){
//         return "#edcf72"
//     }else if(number ===256){
//         return "#edcc61"
//     }else if(number ===512){
//         return "#9c0"
//     }else if(number ===1024){
//         return "#33b5e5"
//     }else if(number ===2048){
//         return "#09c"
//     }else if(number ===4096){
//         return "#a6c"
//     }else if(number ===8192){
//         return "#93c"
//     }
// }
//
// function getNumberColor(number){
//     if(number<=4){
//         return "#776e65"
//     }
//     return 'white'
// }
//
// function showNumberWithAnimation(x,y,randNumber){
//     let numberCell = $('#number-cell-'+x+'-'+y)
//     numberCell.css('background-color',getNumberBackgroundColor(randNumber))
//     numberCell.css('color',getNumberColor(randNumber))
//     numberCell.text(randNumber)
//
//     numberCell.animate({
//         width:'100px',
//         height:'100px',
//         top: getPosTop(x,y),
//         left: getPosLeft(x,y)
//     },50)
// }

// function getPosTop(i,j){
//     return 20+ i*120;
// }
//
// function getPosLeft(i,j){
//     return 20+j*120;
// }

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
        board[i]= new Array();
        for(let j=0;j<4;j++){
            board[i][j] =0;
            let gridCell = $('#grid-cell-'+i+'-'+j)
            gridCell.css('top',getPosTop(i,j))
            gridCell.css('left',getPosLeft(i,j))
        }
    }
    updateBoardView()
}

function updateBoardView(){
    $('.number-cell').remove()
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            $('#grid-container').append("<div class='number-cell' id='number-cell-"+i+'-'+j+"'></div>")
            let numberCell = $('#number-cell-'+i+'-'+j)
            if(board[i][j]==0){
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
        if(board[randomX][randomY]==0){
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
