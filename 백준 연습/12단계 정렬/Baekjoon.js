// 1번 (수 정렬하기)
const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

input.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
