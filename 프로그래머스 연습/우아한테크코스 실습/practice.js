은행출금
function solution(money){
    let answer = [];
    let sort_money = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    
    for (let i = 0; i < sort_money.length; i++) {
        if(i===0){
            answer[i] = Math.floor((money / sort_money[i]));
        } else {
            answer[i] = Math.floor((money % sort_money[i - 1]) / sort_money[i]);
        }
    }
    return answer;
}


청개구리
function solution(word) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphabetReverse = alphabet.split("").reverse();
    let answer = [];
    let ans = [];
    let w = word.split(" ").join("");
    for (let i = 0; i < word.length; i++) {
        answer[i] = alphabet.indexOf(w[i]);
        ans[i] =  alphabetReverse[answer[i]];
    }
    return ans;                                         
} 

