function solution(lines) {
    let answer = 0;
    let minVal = 101;
    let maxVal = -101;
    
    // 1. 최소값, 최대값을 구한다.
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            minVal = Math.min(minVal, lines[i][j]);
            maxVal = Math.max(maxVal, lines[i][j]);
        }
    }

    // 2. 최소값 ~ 최대값만큼의 공간을 구한다.
    let array = [];
    
    for (let i = minVal; i < maxVal; i++) {
        array.push(0);
    }

    // 3. lines로 반복문을 돌면서 나오는 element의 범위에 +1을 해준다.
    for (let i = 0; i < 3; i++) {
        let start = lines[i][0];
        let end = lines[i][1];
        
        for (let j = start; j < end; j++) {
            array[j - minVal] += 1;
        }
    }
    
    // 4. 2개 이상의 선분이 겹치는 곳을 찾아 길이를 구한다.
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 2) {
            answer += 1;
        }
    }
    
    return answer;
}