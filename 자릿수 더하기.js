function solution(n) {
  let answer = 0;
  let num = String(n);
  for (let i = 0; i < num.length; i++) {
    answer += parseInt(num[i]);
  }
  return answer;
}

//다른 풀이 
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}

