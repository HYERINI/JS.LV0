function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    for(let i = 0; i < sizes.length; i++){
        let [w, h] = sizes[i];
        if(h > w){
            [w, h] = [h, w]
        }
        console.log(w, h);
        
        maxWidth = Math.max(w, maxWidth);
        maxHeight = Math.max(h, maxHeight);
    }
    return maxWidth * maxHeight;
}