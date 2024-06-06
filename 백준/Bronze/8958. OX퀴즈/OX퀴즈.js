let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let cnt = parseInt(input[0]);

for(let i = 1; i <= cnt; i++){
    let scoreArr = input[i].split('');
    let total = 0;
    let num = 0;

    for(let j = 0; j < scoreArr.length; j++){
        if(j == 0 && scoreArr[j] == 'O'){
            num = 1;
            total += num;
            continue;
        }

        if(scoreArr[j] == 'O' && scoreArr[j-1] == 'X') {
            num = 1;
            total += num;
        }else if(scoreArr[j] == 'O' && scoreArr[j - 1] == 'O'){
            num += 1;
            total += num;
        }else{
            num = 0;
            total += num;
        }
    }
    console.log(total);
}
