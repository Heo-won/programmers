function solution(numbers) {
  // 오름차순 만들기
  // 앞에두개 곱하기
  let answer = 0;
  numbers.sort(function (a, b) {
    return b - a;
  });
  return (answer = numbers[0] * numbers[1]);
}
