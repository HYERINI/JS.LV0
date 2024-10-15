function solution(k, score){
    var scoreArr = []; //비교할 숫자들을 넣을 배열
    var resultArr = []; //출력할 배열
    var number = score[0];
    score.map((num) => {
        scoreArr.push(num);
        if(scoreArr.length > k){
            scoreArr = scoreArr.map(Number).sort((a, b) => b - a).slice(0, k);
            resultArr.push(scoreArr[k-1]);
        }else{
            number = num > number ? number : num;
            resultArr.push(number);
        }
    })
    
    return resultArr;
}