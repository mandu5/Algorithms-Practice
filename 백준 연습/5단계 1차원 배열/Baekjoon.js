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
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let numbers = [];

input.forEach(x => {
    let rest = x % 42;

    if (numbers.indexOf(rest) === -1) {   // ?
        numbers.push(rest);
    }
}); 
console.log(numbers.length);


//5번 (평균)
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = input[0];
let score = input[1].split(' ');

let max = Math.max(...score);
let sum = 0;

for (let i = 0; i < num; i++) {
  sum += (score[i] / (max*num)) * 100;
}
console.log(sum);

//6번 (OX퀴즈)
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let count = 0;
  let sum = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    sum += count;
  }
  console.log(sum);
}


// 7번 (평균은 넘겠지)
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = input[0] * 1;

for (let i = 1; i <= num; i++) {
    let score = input[i].split(' ');    //공백
    let numStd = score.shift() * 1;    //shift 메서드로 배열 맨 앞 값 삭제
    let count = 0;
    
    let avg = score.reduce((acc, v) => acc += v * 1, 0);
    
    avg /= numStd;

    for (let j = 0; j < numStd; j++) {
        if (score[j] > avg) {          //해당 점수가 평균보다 높을때마다 count++
            count++;
        }
    }
    
    let result = ((count / numStd) * 100).toFixed(3);  //toFixed(3)메서드 = 소수점 세자리 표시
                                                       
    console.log(result + "%");
}