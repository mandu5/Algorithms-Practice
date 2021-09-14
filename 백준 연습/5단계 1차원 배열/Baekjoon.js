// 1번 (최소, 최대)
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let count = (input[0]);

let numbers = input[1].split(' ').map(Number);
let max = numbers[0]; 
let min = numbers[0];

for (let i = 1; i < count; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  } 
  if (min > numbers[i]) {
    min = numbers[i];
  }
}
console.log(min+" "+max);


// 2번 (최댓값)
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);

let max = input[0]; 
let maxIdx = 0;

for (let i = 0; i <= 9; i++) {
  if (max < input[i]) {
    max = input[i];
    maxIdx = i;
    }
}   
console.log(max);
console.log(maxIdx+1);

//2번 
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

let max = Math.max(...input)

console.log(max)
console.log(input.indexOf(max) + 1)


//3번 (숫자의 개수)
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = String(input[0]*input[1]*input[2]);

for (let i = 0; i <= 9; i++) {
    let count = 0;

    for (let j = 0; j < num.length; j++) {
        if (Number(num[j]) === i) {
            count++;
        }
    }
    console.log(count);
}   


//4번 (나머지)
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

let rest = input[0] % 42;
let count = 0;
for (let i = 0; i <= 9; i++) {
    if (rest !== (input[i] % 42)) {
        count++;
    }
}   
console.log(count);
