function solution(array, height) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      answer++;
    }
  }
  return answer;
}

//다른풀이
const solution = (array, height) => {
  let answer = 0;
  answer = array.filter((tall) => tall > height);
  return answer.length;
};
