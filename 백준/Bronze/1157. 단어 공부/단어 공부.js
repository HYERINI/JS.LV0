let input = require('fs').readFileSync('dev/stdin').toString().trim();
input = input.toLowerCase().split('').sort();

let num = 0;
let numArr = [];
let alpabetArr = [];

for(let i = 0; i < input.length; i++){
    if(input[i] == input[i+1]){
        num += 1;
    }else{
        alpabetArr.push(input[i]);
        numArr.push(num);
        num = 0;
    }
}

let numSortedArr = numArr.map(Number).sort((a,b) => a - b);
let answerNum = 0;
let answer;

if(numSortedArr[numSortedArr.length - 1] == numSortedArr[numSortedArr.length - 2]){
    console.log('?');
}else{
    for(let i = 0; i < numArr.length; i++){
        if(numSortedArr[numSortedArr.length - 1] === numArr[i]){
            answerNum = i;
        }
    }
    console.log(alpabetArr[answerNum].toUpperCase());
}