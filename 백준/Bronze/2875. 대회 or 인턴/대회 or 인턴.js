/** index.js **/
/** 백준 제출시 input.txt 말고  dev/stdin **/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ').map(Number);

var N = parseInt(input[0]);
var M = parseInt(input[1]);
var K = parseInt(input[2]);

var sum = 0;
var count = parseInt(N / 2);

for(let i = 0; i < count; i++){

    N = N - 2;
    M = M - 1;

    if(N + M >= K && N >= 0 && M >= 0){
        sum += 1;
    }else{
        break;
    }

}

console.log(sum);

