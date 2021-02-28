function getNumberBackgroundColor(number){
    if(number===2){
        return "#eee4da"
    }else if(number ===4){
        return "#ede0c8"
    }else if(number ===8){
        return "#f2b179"
    }else if(number ===16){
        return "#f59563"
    }else if(number ===32){
        return "#f67c5f"
    }else if(number ===64){
        return "#f65e3b"
    }else if(number ===128){
        return "#edcf72"
    }else if(number ===256){
        return "#edcc61"
    }else if(number ===512){
        return "#9c0"
    }else if(number ===1024){
        return "#33b5e5"
    }else if(number ===2048){
        return "#09c"
    }else if(number ===4096){
        return "#a6c"
    }else if(number ===8192){
        return "#93c"
    }
}

function getNumberColor(number){
    if(number<=4){
        return "#776e65"
    }
    return 'white'
}

function showNumberWithAnimation(x,y,randNumber){
    let numberCell = $('#number-cell-'+x+'-'+y)
    numberCell.css('background-color',getNumberBackgroundColor(randNumber))
    numberCell.css('color',getNumberColor(randNumber))
    numberCell.text(randNumber)

    numberCell.animate({
        width:'100px',
        height:'100px',
        top: getPosTop(x,y),
        left: getPosLeft(x,y)
    },50)
}

function showMoveAnimation(fromX,fromY,toX,toY) {
    let numberCell = $('#number-cell-'+fromX+'-'+fromY)
    numberCell.animate({
        top: getPosTop(toX,toY),
        left: getPosLeft(toX,toY)
    },200)
}

function updateScore(score) {
    $('#score').text(score)
}
