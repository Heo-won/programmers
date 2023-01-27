function solution(numbers, num1, num2) {
  var answer = [];

  for (let i = num1; i < num2 + 1; i++) {
    answer.push(numbers[i]);
  }

  return answer;
}


//다른풀이
function solution(numbers, num1, num2) {
    return numbers.filter((v, i) => i >= num1 && i <= num2)
}