let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let cnt = parseInt(input[0]);
let length = input[1].length;
var firstArr = input[1].toString().split('');

for(let i = 2; i <= cnt; i++){
    var secondArr = input[i].toString().split('');

    for(let j = 0; j < length; j++){
        if(firstArr[j] == secondArr[j]){
            firstArr[j] = secondArr[j];
        }else{
           firstArr[j] = '?';
        }
    }
}
console.log(firstArr.join('').toString())

