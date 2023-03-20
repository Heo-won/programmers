function solution(phone_number) {
  let front = phone_number.length - 4;
  let slice = phone_number.slice(-4);
  // console.log(slice);

  return "*".repeat(front) + slice;
}
