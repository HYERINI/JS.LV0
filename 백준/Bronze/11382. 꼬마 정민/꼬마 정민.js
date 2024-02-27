const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ').map(Number);

console.log(input.reduce((a,b) => a + b))