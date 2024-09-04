const solution = (s) => {
    var newArr = s.split(' ');
    let resultArr = [];
    console.log(newArr);
    
    newArr.map((v) => {
        console.log(v);
        if(v == '') resultArr.push('');
        else{
            v = v[0].toUpperCase() + v.substring(1).toLowerCase()
            resultArr.push(v);
        }
    })
    
    return resultArr.join(' ');
}