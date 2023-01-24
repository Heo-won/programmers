function solution(n) {
  let answer = 0;
  let a = n / 7;
  let b = n % 7;
  if (b == 0) {
    answer = a;
  } else if (b != 0) {
    answer = a + 1;
  }
  return parseInt(answer);
}
