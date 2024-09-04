const solution = (a, b) => {
    var sum = 0;
    const newA = a.map(Number).sort((a,b) => a - b);
    const newB = b.map(Number).sort((a,b) => b - a);
    
    for(let i = 0; i < newA.length; i++){
        sum += newA[i]*newB[i];
    }
    
    return sum;
}