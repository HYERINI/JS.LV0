/** index.js **/
/** 백준 제출시 input.txt 말고  dev/stdin **/
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');
let answer = 0;
let count = Number(input[0]); // 숫자 하나를 저장하기 위해 첫 줄을 숫자로 변환
let firstArr = input[1].split(' ').map(Number).sort((a, b) => a - b); // 첫 번째 배열을 숫자 배열로 저장
let secondArr = input[2].split(' ').map(Number).sort((a, b) => b - a); // 두 번째 배열을 숫자 배열로 저장

// console.log(count); // 숫자 출력
// console.log(firstArr); // 첫 번째 배열 출력
// console.log(secondArr); // 두 번째 배열 출력

for(let i = 0; i < firstArr.length; i++){
    answer += (firstArr[i] * secondArr[i]);
}

console.log(answer);



