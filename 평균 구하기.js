function solution(arr) {
    var ans = 0;
    let sum = 0;
        for(let i=0; i<arr.length; i++){
            sum+=arr[i]
        }
        return ans= sum/arr.length;
    }