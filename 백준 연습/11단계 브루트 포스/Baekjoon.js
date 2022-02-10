// 1번 (블랙잭) (세 장의 카드를 고르는 모든 경우를 고려하는 문제)
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
input[0] = input[0].split(" ");
const cards = input[1].split(" ").map((element) => Number(element));
const N = Number(input[0][0]); // N은 총 카드의 개수
const M = Number(input[0][1]); // M은 3개의 숫자의 합과 가장 가까운 목표 값
let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      const gap = M - sum;
      if (gap >= 0 && answer <= sum) {
        answer = sum;
      }
    }
  }
}
console.log(answer);

// 2번 (분해합) (모든 경우를 시도하여 N의 생성자를 구하는 문제)
let input = require("fs").readFileSync("/dev/stdin").toString();
const N = Number(input);
let start = N - String(N).length * 9;
let M = start;
let answer;
while (true) {
  M++;
  let sum = M;
  for (let i = 0; i < String(M).length; i++) {
    sum = sum + Number(String(M).charAt(i));
  }
  if (sum === N) {
    answer = M;
    break;
  }
  if (M >= N) {
    answer = 0;
    break;
  }
}
console.log(answer);

// 3번 (덩치) (모든 사람을 비교하여 덩치 등수를 구하는 문제)
let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((el) => Number(el)));
let arr = input.slice(1, input.length);
let result = [];

for (let i = 0; i < arr.length; i++) {
  let grade = 1;
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) grade++;
    }
  }
  result.push(grade);
}

console.log(result.join(" "));

// 4번 (체스판 다시 칠하기) (체스판을 만드는 모든 경우를 시도하여 최적의 방법을 찾는 문제)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  [size, ...arr] = input;
  [row, col] = size.split(" ");
  arr = arr.map((str) => str.trim("r").split(""));

  const answer = [];
  const line = ["WBWBWBWB", "BWBWBWBW"];

  for (let i = 0; i <= row - 8; i++) {
    // i = x축-8, j = y축-8
    for (let j = 0; j <= col - 8; j++) {
      for (let z = 0; z < 2; z++) {
        // 두 개의 경우의 수 를 위한 for문
        let count = 0;

        for (let x = 0; x < 8; x++) {
          // 8*8 정사각형을 도는 for문
          for (let y = 0; y < 8; y++) {
            const current = arr[i + x][j + y];
            if (current !== line[(x + z) % 2][y]) count++;
          }
        }
        answer.push(count);
      }
    }
  }
  return Math.min(...answer);
}
console.log(solution(input));

// 5번 (영화감독 슘) (N번째 종말의 수가 나올 때까지 차례대로 시도하는 문제)
const n = +require("fs").readFileSync("/dev/stdin").toString();
let num = 666;
let count = 1;
while (count !== n) {
  num++;
  if (String(num).includes("666")) count++;
}
console.log(num);
