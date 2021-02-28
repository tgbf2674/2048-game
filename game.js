$(document).keydown((e)=>{
    //left
    if(e.keyCode ===37){
        if(moveLeft()){
            generateOneNumber()
            isGameOver()
        }
        return
    }
    //up
    if(e.keyCode ===38){
        if(moveUp()) {
            generateOneNumber()
            isGameOver()
        }
        return
    }
    //right
    if(e.keyCode ===39){
        if(moveRight()){
            generateOneNumber()
            isGameOver()
        }
        return
    }
    //down
    if(e.keyCode ===40){
        if(moveDown()){
            generateOneNumber()
            isGameOver()
        }
        return
    }

})

function isGameOver() {

}
function moveLeft() {
    if(!canMoveLeft(board)){
        return false
    }

    for (let i= 0;i<4;i++){
        for (let j=1;j<4;j++){
            if(board[i][j]!==0){
                for(let k = 0;k<j;k++){
                    if(board[i][k]===0 && noBlockHorizontalCol(i,k,j,board)){
                        showMoveAnimation(i,j,i,k);
                        board[i][k] =board[i][j]
                        board[i][j]=0
                    }else if(board[i][k]===board[i][j] && noBlockHorizontalCol(i,k,j,board)) {
                        showMoveAnimation(i,j,i,k)
                        board[i][k]*= 2
                        board[i][j]=0
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView()",200)
    return true
}

function moveRight() {
    if(!canMoveRight(board)){
        return false
    }
    for(let i = 0;i<4;i++){
        for (let j= 2; j>=0;j--){
            if(board[i][j]!==0){
                for (let k = 3;k>j;k--){
                    if(board[i][k]===0 && noBlockHorizontalCol(i,j,k,board)){
                        showMoveAnimation(i,j,i,k)
                        board[i][k]=board[i][j]
                        board[i][j] =0
                    }else if (board[i][k]===board[i][j] && noBlockHorizontalCol(i,j,k,board)){
                        showMoveAnimation(i,j,i,k)
                        board[i][k]*=2
                        board[i][j]=0
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView()",200)
    return true
}


function moveUp(){
    if(!canMoveUp(board)){
        return false
    }
    for (let i = 1;i<4;i++){
        for (let j =0;j<4;j++){
            if(board[i][j]!==0) {
                for (let k = 0; k < i; k++) {
                    if (board[k][j] === 0 && noBlockHorizontalRow(j, k, i, board)) {
                        showMoveAnimation(i, j, k, j)
                        board[k][j] = board[i][j]
                        board[i][j] = 0
                    } else if (board[k][j] === board[i][j] && noBlockHorizontalRow(j, k,i, board)) {
                        showMoveAnimation(i, j, k, j)
                        board[k][j] += board[i][j]
                        board[i][j] = 0
                    }
                }
            }
            }
        }
        setTimeout("updateBoardView()",200)
        return true
}

function moveDown() {
    if(!canMoveDown(board)){
        return false
    }

    for (let i=2;i>=0;i--){
        for (let j = 0;j<4;j++){
            if(board[i][j]!==0){
                for (let k = 3;k>i;k--){
                    if(board[k][j]===0 && noBlockHorizontalRow(j,i,k,board)){
                        showMoveAnimation(i,j,k,j)
                        board[k][j] =board[i][j]
                        board[i][j]=0
                    }else if (board[k][j]===board[i][j]&& noBlockHorizontalRow(j,i,k,board)){
                        showMoveAnimation(i,j,k,j)
                        board[k][j] *= 2
                        board[i][j]=0
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView()",200)
    return true
}


