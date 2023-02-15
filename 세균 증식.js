function solution(n, t) {
    let answer = 0;
    answer=Math.pow(2,t)*n
    return answer;
}

//다른 풀이
function solution(n, t) {
    var answer = 0;
    answer = n * (2**t);
    return answer;
}
