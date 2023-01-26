function solution(my_string, letter) {
  let answer = [];
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === letter) {
      continue;
    } else {
      answer.push(my_string[i]);
    }
  }
  return answer.join("");
}


//다른 풀이
function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}