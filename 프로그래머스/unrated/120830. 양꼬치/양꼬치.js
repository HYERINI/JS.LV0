const solution = (n, k) => {
    let result = n * 12000 + (k - parseInt(n/10)) * 2000;
    
    return result;
}