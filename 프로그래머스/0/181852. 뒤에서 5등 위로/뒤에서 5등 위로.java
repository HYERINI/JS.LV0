import java.util.*;

class Solution {
    public int[] solution(int[] num_list) {
        Arrays.sort(num_list);
        int[] new_arr = Arrays.copyOfRange(num_list, 5, num_list.length);
        return new_arr;
    }
}