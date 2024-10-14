function solution(food) {
    var answer = '';
    
    food.map((num, index) => {
        if(index == 0) return;
        var repeatNum = Math.trunc(num / 2);
        answer += String(index).repeat(repeatNum);
    })
    
    return answer + '0' + [...answer].reverse().join('')
}