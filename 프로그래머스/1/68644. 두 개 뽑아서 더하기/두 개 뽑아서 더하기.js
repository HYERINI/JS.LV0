function solution(numbers) {
    let mySet = new Set();
    
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            mySet.add(numbers[i] + numbers[j]);  // 두 숫자의 합을 Set에 추가
        }
    }
    
    return [...mySet].sort((a, b) => a - b);  // Set을 배열로 변환 후 정렬
}
