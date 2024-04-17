let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const isPalindrome = (str) => {
    return recursion(str, 0, str.length - 1);
}

const recursion = (str, first, last) => {
    num += 1;
    if(first >= last){
        return 1;
    }
    else if(str[first] != str[last]){
        return 0;
    }
    else{
        return recursion(str, first+1, last-1);
    }
}

for(let i = 1; i < parseInt(input[0]) + 1; i++){
    const str = input[i];
    var num = 0;
    console.log(isPalindrome(str) + ' ' + num);
}