function solution(num) {
  let answer = 0;

  for (let i = 0; i <= 500; i++) {
    if (num != 1) {
      //num이 1이 아니라면
      if (num % 2 === 0) {
        num /= 2;
      } else {
        num = num * 3 + 1;
      }
    } else {
      //num이 1이라면
      return (answer = i);
    }
  }
  return (answer = -1);
}
