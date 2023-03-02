function solution(s){
    let change = s.toLowerCase();
//    console.log(change);
    let check_p = change.split("p").length;
    let check_y = change.split("y").length;
    
    if (check_p == check_y) {
        return true;
    } else {
        return false;
    }
}