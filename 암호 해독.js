function solution(cipher, code) {
    var answer = '';
    for(let i = code-1;i<cipher.length;i+=code){
        answer += cipher[i]
    }
    return answer;
}

//다른 풀이 '
function solution(cipher, code) {
    return cipher.split('').filter((_, index) => (index + 1) % code === 0).join('');
}