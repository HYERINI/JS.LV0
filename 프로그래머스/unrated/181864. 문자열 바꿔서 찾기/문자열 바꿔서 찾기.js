const solution = (myString, pat) => {
    var newArr = myString.split('');
    newArr = newArr.map((word) => {
        if(word === 'A'){
            return 'B';
        }else if(word === 'B'){
            return 'A';
        } else{
            return word;
        }
    }).join('');

    return newArr.includes(pat) == true ? 1 : 0;
}