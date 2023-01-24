function solution(dot) {
  if (dot[0] > 0 && dot[1] > 0) {
    return 1;
  } else if (dot[0] < 0 && dot[1] > 0) {
    return 2;
  } else if (dot[0] < 0 && dot[1] < 0) {
    return 3;
  } else if (dot[0] > 0 && dot[1] < 0) {
    return 4;
  }
}



function solution(dot) {
    var answer = 0;
    const x = dot[0];
    const y = dot[1];

    if (x > 0 && y > 0) answer = 1
    if (x < 0 && y > 0) answer = 2
    if (x < 0 && y < 0) answer = 3
    if (x > 0 && y < 0) answer = 4

    return answer;
}



function solution(dot) {
  var answer = 0;
  if (dot[0] > 0 && dot[1] > 0) answer = 1;
  if (dot[0] < 0 && dot[1] > 0) answer = 2;
  if (dot[0] < 0 && dot[1] < 0) answer = 3;
  if (dot[0] > 0 && dot[1] < 0) answer = 4;
  return answer;
}
