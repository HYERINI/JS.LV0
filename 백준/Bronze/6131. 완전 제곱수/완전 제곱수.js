/** index.js **/
/** 백준 제출시 input.txt 말고  dev/stdin **/
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString();
const N = parseInt(input);

var sum = 0;

for(let A = 1; A <= 500; A++){
    for(let B = 1; B <= A; B++){
        if((A * A) === (B * B) + N){
            sum += 1;
        }
    }
}

console.log(sum);


// const answer = input.reduce((a,b) => a+b);
// console.log(answer);