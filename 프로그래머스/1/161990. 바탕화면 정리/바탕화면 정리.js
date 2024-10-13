function solution(wallpaper) {
    var arr = [];
    var minX = 51;
    var maxX = 0;
    var minY = 51;
    var maxY = 0;
    for(let i = 0; i < wallpaper.length; i++){
        arr[i] = wallpaper[i].split('');
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[0].length; j++){
            if(arr[i][j] == '#'){
                minX = Math.min(i, minX);
                minY = Math.min(j, minY);
                maxX = Math.max(i, maxX);
                maxY = Math.max(j, maxY);
            }
        }
    }
    return ([minX, minY, maxX+1, maxY+1]);
}