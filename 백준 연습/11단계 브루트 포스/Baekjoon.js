// 1번 (블랙잭) (세 장의 카드를 고르는 모든 경우를 고려하는 문제)
let input = require('fs').readFileSync("/dev/stdin").toString().split("\n");
input[0] = input[0].split(" ");
const cards = input[1].split(" ").map((element) => Number(element));
const N = Number(input[0][0]); // N은 총 카드의 개수
const M = Number(input[0][1]); // M은 3개의 숫자의 합과 가장 가까운 목표 값
let answer = 0;

for(let i = 0; i < N; i++){
   for(let j = i+1; j < N; j++){
      for(let k = j+1; k < N; k++){
         const sum = cards[i] + cards[j] + cards[k];
         const gap = M - sum;
         if(gap >= 0 && answer <= sum){
            answer = sum;
         }
      }
   }
}
console.log(answer);


// 2번 (분해합) (모든 경우를 시도하여 N의 생성자를 구하는 문제)
let input = require('fs').readFileSync("/dev/stdin").toString();
const N = Number(input);
let start = N - (String(N).length * 9);
let M = start;
let answer;
while(true){
    M++;
    let sum = M;
    for(let i = 0; i < String(M).length; i++){
        sum = sum + Number(String(M).charAt(i));
    }
    if(sum === N){
        answer = M;
        break;
    }
    if(M >= N){
        answer = 0;
        break;
    }
}
console.log(answer);


// 3번 (덩치) (모든 사람을 비교하여 덩치 등수를 구하는 문제)
const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const men = arr.map((v, i) => ({weight: v.split(" ")[0], height: v.split(" ")[1], rank: 1}));
for (let i = 0; i < men.length; i++) {
    for (let j = 0; j < men.length; j++) {
        if (i !== j && men[i].weight < men[j].weight && men[i].height < men[j].height) men[i].rank++;
    }
}
console.log(men.map(i => i.rank).join(" "));


// 4번 (체스판 다시 칠하기) (체스판을 만드는 모든 경우를 시도하여 최적의 방법을 찾는 문제)
// 5번 (영화감독 슘) (N번째 종말의 수가 나올 때까지 차례대로 시도하는 문제)
