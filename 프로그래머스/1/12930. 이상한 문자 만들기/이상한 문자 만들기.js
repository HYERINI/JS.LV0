const solution = (s) => {
    var wordArr = s.split(' ');
    
    wordArr = wordArr.map((num) => {
        num = num.split('').map((w, index) => {
            return index % 2 == 0 ? w.toUpperCase() : w.toLowerCase();
        })
        return num.join('');
    })
    
    return wordArr.join(' ');
    
    // return wordArr.join('').join(' ');
}