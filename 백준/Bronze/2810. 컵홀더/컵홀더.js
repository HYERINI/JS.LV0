let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let cnt = parseInt(input[0]);
let seatArr = input[1];
let num = 1;


for(let i = 0; i < cnt; i++){
    // console.log(seatArr[i-1] + seatArr[i]);
    if(seatArr[i] == 'S'){
        num += 1;
    }
    else if(i > 0 && seatArr[i-1] + seatArr[i] == 'LL'){
        num += 1;
        if(seatArr[i+1] == 'L'){
            i++;
        }
    }
}

if(num > cnt) {
    console.log(cnt);
}else{
    console.log(num);
}