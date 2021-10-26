// 1번 (팩토리얼) (재귀학습 1)
let input = require('fs').readFileSync('/dev/stdin').toString();

function factorial(num) {
    return num <= 1 ? 1 : num * factorial(num - 1); // 재귀
}
console.log(factorial(input));


// 2번 (피보나치 수 5) (재귀학습 2)
let input = require('fs').readFileSync('/dev/stdin').toString();

function fibonachi(n){  // 재귀적(탑다운)방식 
    return n < 2 ? n : fibonachi(n-1) +fibonachi(n-2);
}
console.log(fibonachi(input));


// 3번 (별 찍기 - 10) (재귀적인 패턴을 재귀함수로 찍는 문제 1)
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const num = parseInt(input[0])
const lines = []
 
function printStars(num) {
  for(let i = 0; i < num; i++) {
    for(let j = 0; j < num; j++) {
      star(i, j, num)
    }
    lines.push("\n")
  }
}
 
function star(i, j, num) {
  if(i % 3 === 1 && j % 3 === 1) { // (1,1), (1,4), (1,7)...공백으로 푸시
    lines.push(" ")
  } else {
    if(num === 1) {
      lines.push("*")
    } else {       // (3,3) = (1,1)이 되고, (3,4) = (1,1)이 됨. (9,9), (27,27)도 동일한 방식으로 재귀 호출됨.
      star(parseInt(i/3), parseInt(j/3), parseInt(num/3))
    }
  }
}
printStars(num);
console.log(lines.join(""))


// 4번 (하노이 탑 이동 순서) (재귀적인 패턴을 재귀함수로 찍는 문제 2)
let input = require('fs').readFileSync("/dev/stdin").toString();

let N = Number(input); // 원판의 갯수
let count = 0;
let answer = [];

function Hanoi(num, from, other, to){ // num : 원반의 개수, from : 출발지 기둥 번호, to : 목적지 기둥 번호, other : 나머지 기둥 번호
    if(num === 0) {
        return;
    }else{
        Hanoi(num - 1 , from, to, other); // 받아온 원반 갯수보다 하나 적은 원반들을 목적지가 아닌 곳으로 재귀적으로 이동
        answer.push([from, to]);          // 맨 아래 원반을 목적지로 이동시킴
        count++;
        Hanoi(num - 1, other, from, to);  //다른 곳으로 옮겼던 원반들을 그 위에 얹음
    }
}
Hanoi(N, '1','2','3');
console.log(count);
console.log(answer.map((element) => element.join(" ")).join("\n"));