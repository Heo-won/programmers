function solution(a, b) {
    var answer = 0;
    if(a>=b){ // a가 b보다 클 경우(a, b가 같을 경우는 둘 중 아무 수나 리턴)
        for(let i=b; i<=a; i++){ // b에서 a까지 더하기
            answer = answer+=i;
        }
    }else { //b가 a보다 클 경우
        for(let i=a; i<=b; i++){ // a에서 b까지 더하기
            answer = answer+=i;
        }
    }
    return answer;
}
