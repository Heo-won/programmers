function solution(n) {
    return "수박".repeat(n).substring(0,n)
}

function solution(n) {
    let answer = '';
    for(let i = 0; i<n; i++) {
        i % 2 === 0 ? answer += '수' : answer += '박'
    }
    return answer;
}

// function solution(n) {
//     let result = ""
//     for(let i = 1; i<=n; i++){
//         if(i % 2 === 0){
//             result += "박"
//         }else{
//             result += "수"
//         }
//     }
//     return result
// }