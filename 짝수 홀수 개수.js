function solution(num_list) {
  let answer = [];
  let even = [];
  for (i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      even.push(i);
    }
  }
  return (answer = [even.length, num_list.length - even.length]);
}


// 다른 풀이
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}
