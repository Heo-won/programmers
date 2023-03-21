function solution(arr) {
    let answer = [];
    
      arr.splice(arr.indexOf(Math.min(...arr)),1);
      arr.length <= 1 ? answer = [-1] : answer = arr
    
    return answer
  
}

//효율성 떨어짐
// function solution(arr) {
//     let answer = [];
    
//     if (arr.length <= 1){
// 		return [-1]
// 	} else {
// 		let minNum = Math.min(arr)
// 		let idx = arr.indexOf(minNum)
// 		arr.splice(idx,1)
//         return answer = arr
// 	}
//     return answer  
// }

