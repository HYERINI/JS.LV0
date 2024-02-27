const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ').map(Number);

const result = input[0] < input[1] ? '<' : input[0] > input[1] ? '>' : '==';
console.log(result);