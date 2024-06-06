let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let cnt = parseInt(input[0]);
// console.log(input[1].split);

for(let i = 1; i <= cnt; i++){
    let newStr = [];
    let arr = input[i].split(' ');
    let num = arr[0];
    let str = arr[1].split('');

    for(let j = 0; j < str.length; j++) {
        for(let k = 0; k < num; k++){
            newStr.push(str[j]);
        }
    }

    console.log(newStr.join(''));
}
