function solution(n) {
  // 1. n이 x의 제곱이라면 (x+1)의 제곱을 리턴 ,
  //     2. 제곱이 아니라면 -1을 리턴
  if (n === Math.pow(Math.floor(Math.sqrt(n)), 2)) {
    return Math.pow(Math.floor(Math.sqrt(n)) + 1, 2);
  } else {
    return -1;
  }
}
