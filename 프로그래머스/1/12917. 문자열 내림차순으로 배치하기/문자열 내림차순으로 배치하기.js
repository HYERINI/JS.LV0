const solution = (s) => {
    let sArr = s.split('').sort((a, b) => b - a);
    console.log(sArr.sort((a, b) => b - a))
    return sArr.join('');
}