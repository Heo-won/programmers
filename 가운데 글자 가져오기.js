function solution(s) {
    var answer = ''; 
      if (s.length %2 == 0) { //s 의 길이가 짝수일 때 
      answer = s[s.length / 2 - 1] + s[s.length / 2]
        // s 길이의 반 - 1 값에 해당하는 index 값 + s 길이의 반 값에 해당하는 index 값
    } else { //s 의 길이가 홀수일 때
      answer = s[Math.floor(s.length/2)] // s 길이의 반 값에서 반내림한 index 값
    }
    return answer;
}