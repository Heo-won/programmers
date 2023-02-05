function solution(n) {
  for (let i = 0; i < n / 2; i++) {
    if (i * i == n) {
      return 1;
    }
  }
  return 2;
}


//다른 풀이
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

