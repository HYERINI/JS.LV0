let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

for(let i = 0; i < input.length - 1; i++){
    let num = input[i];

    let numArr = num.split('');
    let numNewArr = [];
    for(let i = numArr.length-1; i >= 0; i--){
        numNewArr.push(numArr[i])
    }

    if(parseInt(numArr.join('')) === parseInt(numNewArr.join(''))){
        console.log('yes');
    }else {
        console.log('no');
    }
}
