const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim(); // trim()으로 공백 제거

console.log(input + '??!');
