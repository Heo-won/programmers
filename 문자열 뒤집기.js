function solution(my_string) {
  let answer = "";
  for (let i = my_string.length - 1; i >= 0; i--) {
    answer += my_string[i];
  }
  return answer;
}



//다른 풀이
function solution(my_string) {
    let answer = '';
    answer = my_string.split('');

    return answer.reverse().join('');
}
