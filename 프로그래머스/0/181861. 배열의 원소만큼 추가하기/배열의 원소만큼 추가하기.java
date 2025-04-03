class Solution {
    public int[] solution(int[] arr) {
        int size = 0;
        for(int s : arr) size += s;
        
        int[] new_arr = new int[size];
        int idx = 0;
        for(int s : arr){
            for(int i = 0; i < s; i++){
                new_arr[idx++] = s;
            }
        }
        return new_arr;
    }
}