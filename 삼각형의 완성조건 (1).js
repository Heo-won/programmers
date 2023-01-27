function solution(sides) {
  let answer = 0;
  sides.sort(function (a, b) {
    return a - b;
  });
  if (sides[2] < sides[0] + sides[1]) {
    answer = 1;
  } else {
    answer = 2;
  }
  return answer;
} 

//다른 풀이
function solution(sides) {
  sides = sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}
