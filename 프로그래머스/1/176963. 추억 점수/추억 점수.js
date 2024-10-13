function solution(name, yearning, photo) {
    var result = [];
    for(let i = 0; i < photo.length; i++){
        var score = 0;  
        for(let j = 0; j < photo[i].length; j++){
            console.log('hu', name.includes(photo[i][j]))
            if(name.includes(photo[i][j])){
                index = name.indexOf(photo[i][j]);
                score += yearning[index];
            }
        }
        result.push(score);
    }
    return result;
}