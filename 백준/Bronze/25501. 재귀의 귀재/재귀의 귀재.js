let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

// console.log(input[0]);
for(let i = 1; i < parseInt(input[0]) + 1; i++){
    let str = input[i];
    console.log(palindrome(str)+ ' ' + recursion(str));
}

function palindrome(input){
    let inputArr = input.split('');
    let inputNewArr = [];

    for(let i = inputArr.length-1; i >= 0; i--){
        inputNewArr.push(inputArr[i])
    }

    if(inputArr.join('') === inputNewArr.join('')){
        return 1;
    }else {
        return 0;
    }
}

function recursion(input){
    input = input.split('');
    // console.log(input);

    let num = 0;
    let length = input.length - 1;

    for(let i = 0; i <= length; i++){
        if(i >= length - i || input[i] != input[length - i])
            break;
        else if(i < length - i && input[i] == input[length - i]){
            num += 1;
        }
    }
    return(parseInt(num) + 1);
}