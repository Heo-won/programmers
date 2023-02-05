function solution(str1, str2) {
  // for(let i=0; i<str1.length; i++){
  //     for(let j=0; j<str2.length; j++){
  if (str1.includes(str2)) {
    return 1;
  } else {
    return 2;
  }
  // }
  // }
}


//다른 풀이
function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2
}
