let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let answer = new Array(26).fill(-1);
// console.log(String.fromCharCode('a'.charCodeAt() + 2));

//일단 입력값을 배열로바꿔
let arr = input.toString().split('');

for(let i = 0; i < 26; i++){
    let num = 0;
    for(let j = 0; j < arr.length; j++) {
        if (arr[j] == String.fromCharCode('a'.charCodeAt() + i)) {
            answer[i] = j;
            break;
        }
    }
}
console.log(answer.join(' '));