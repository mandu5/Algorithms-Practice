// 1번 (구구단)

var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

var num1 = parseInt(input[0]);

  for (var i = 1; i <= 9; i++) {
      console.log(num1 + " * " +i + " = " + num1 * i);
  }

// 2번 (a+b-3)
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n'); //여러줄 입력 = \n

for (var i = 1; i <= input[0]; i++) {
    var numbers = input[i].split(' ').map(Number);
    
    console.log(numbers[0] + numbers[1]);
}


// 3번 (합)
var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

  var num = parseInt(input[0]);
  var sum = 0;

    for (var i = 1; i <= num; i++) {
      sum += i;
    }
     console.log(sum);
    

// 4번 (빠른 A+B) 
var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

  var answer = '';

    for (var i = 1; i <= input[0]; i++) {
      var num = input[i].split(' ').map(Number);
      answer += num[0] + num[1] + "\n";
    }
  console.log(answer); //정답 한번에 출력


// 5번 (N 찍기)
var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

  var num = parseInt(input[0]);
  var answer = '';

    for (var i = 1; i <= num; i++) {
      answer += i + "\n";
    }
     console.log(answer);


// 6번 (기찍 N)
var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

  var num = parseInt(input[0]);
  var answer = '';

    for (var i = num; i >= 1; i--) {
      answer += i + "\n";
    }
     console.log(answer);


// 7번 (A+B-7)
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

    for (let i = 1; i <= input[0]; i++) {
      let num = input[i].split(' ').map(Number);
      let answer = `Case #${i}: ${(num[0]) + (num[1])}`;
      console.log(answer); 
    } 


// 8번 (A+B -8)
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

    for (let i = 1; i <= input[0]; i++) {
      let num = input[i].split(' ').map(Number);
      let answer = `Case #${i}: ${num[0]} + ${num[1]} = ${(num[0]) + (num[1])}`;
      console.log(answer); 
    } 


// 9번 (별 찍기 - 1)
let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

  let star = '';
    for (let i = 0; i < input[0]; i++) {
      for (let j = 0; j <= i; j++) {
        star += "*";
      }
      star += "\n";
    }
  console.log(star);


// 10번 (별 찍기 - 2)
let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let num = parseInt(input[0]);
  let star = '';
    for (let i = 0; i < num; i++) {
      for (let j = num - 1; j > i; j--) {
        star +=  " ";
      }
      for (let k = 0; k <=i; k++){
        star += "*";
      }
    star += "\n";
  }
console.log(star);


// 11번 (X보다 작은 수)
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let inputs = input[0].split(' ').map(Number);  //입력 첫줄
let total = (inputs[0]);                   //입력 inputs의 첫번째값
let limit = (inputs[1]);                   //입력 inputs의 두번째값
 
let numbers = input[1].split(' ');             //입력 두번째줄

result = '';
for (let i = 0; i < total; i++) {
  if ((numbers[i]) < limit) {
    result += numbers[i] + ' ';
  }
}

console.log(result);