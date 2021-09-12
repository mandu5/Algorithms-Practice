// 1번 (A+B - 5)
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length - 2; i++) {
    let numbers = input[i].split(' ').map(Number);
    
    console.log((numbers[0]) + (numbers[1]));
}


// 2번 (A+B - 4)
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length - 1; i++) {
    let numbers = input[i].split(' ').map(Number);
    
    console.log((numbers[0]) + (numbers[1]));
}


// 3번 (더하기 사이클)
let input = Number(require('fs').readFileSync('/dev/stdin').toString().split(' '));

let num = input;
let sum;
let count = 0;

while (true) {
	count++;

    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sum % 10;
    if (input === num) break;
}
console.log(count);