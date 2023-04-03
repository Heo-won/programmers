function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}


//약수의 개수를 구하는 함수를 만들어 줌
function countDivisor(num){
    let sum = 0;
       for(let i = 0; i <= num; i++ ){
           if (num % i === 0)
               sum += 1;
        }
       return sum;
}
//left보다 크거나 같고 right보다 크거나 같은 숫자의 약수 개수를 구해줌
//약수 개수가 짝수라면 +, 홀수라면 -해줌.
function solution(left, right) {
   let divisorSum = 0;
   for(let i = left; i<= right; i++ ){
       countDivisor(i) % 2 === 0 ? divisorSum += i : divisorSum -= i;
   }
   return divisorSum;
}

