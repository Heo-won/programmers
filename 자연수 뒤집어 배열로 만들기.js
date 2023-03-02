function solution(n) {
  let arr = n.toString().split("");
  let answer = [];

  console.log(arr);

  for (var i = arr.length - 1; i >= 0; i--) {
    answer.push(Number(arr[i]));
  }

  return answer;
}
