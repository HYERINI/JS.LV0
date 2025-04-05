class Solution {
    public String solution(String rsp) {
        String answer = "";
        for(char str: rsp.toCharArray()){
            if(str == '2'){
                answer += "0";
            }else if(str == '0'){
                answer += "5";
            }else{
                answer += "2";
            }
        }
        return answer;
    }
}