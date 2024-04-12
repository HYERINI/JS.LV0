let input = require('fs').readFileSync('dev/stdin').toString().trim();
input = input.split('\n');

const N = input[0].split(' ')[0];
const M = input[0].split(' ')[1];

let setNum = parseInt(N / 6);
let eachNum = parseInt(N % 6);

let setArr = [];
let eachArr = [];

for(let i = 1; i <= M; i++){
    let arr = input[i].split(' ');
    setArr.push(arr[0]);
    eachArr.push(arr[1]);
}

setArr = setArr.map(Number).sort((a,b) => a - b);
eachArr = eachArr.map(Number).sort((a,b) => a - b);

let selectedSet = setArr[0];
let selectedEach = eachArr[0];

let eachSum = 0;
if(selectedSet < selectedEach*eachNum){
    eachSum = selectedSet;
}else{
    eachSum = selectedEach * eachNum;
}

// console.log(selectedSet, selectedEach);
// console.log(setNum, eachNum);
// console.log(eachSum);
//
// console.log(setNum * selectedSet);
// console.log(N * selectedEach)
if(setNum * selectedSet < N * selectedEach){
    console.log(setNum * selectedSet + eachSum);
}else{
    console.log(N * selectedEach);
}