function solution(s1, s2) {
  let answer = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) answer++;
    }
  }
  return answer;
}

//for of 문
function solution(s1, s2) {
  let answer = 0;
  for (let i of s1) {
    for (let j of s2) {
      if (i === j) {
        answer++;
      }
    }
  }
  return answer;
}

//다른 풀이
function solution(s1, s2) {
  let count = 0;
  for (let v of s1) if (s2.includes(v)) count++;
  return count;
}

//다른 풀이
function solution(s1, s2) {
  const answer = s1.filter((x) => s2.includes(x));
  return answer.length;
}
