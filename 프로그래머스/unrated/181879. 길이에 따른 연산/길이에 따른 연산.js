function solution(num_list) {
    if(num_list.length > 10){
        return num_list.reduce((a, b) => (a + b))
    }else{
        return num_list.reduce((a, b) => (a * b))
    }
}

// const solution = n => n.reduce((a,v) => n.length > 10 ? a + v : a * v)
