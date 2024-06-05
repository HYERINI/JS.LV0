let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
// console.log(input);

if(input == ''){
    console.log(0);
}else {
    console.log(input[0].split(' ').length);
}