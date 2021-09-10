// 1번 (구구단)

var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

var num1 = parseInt(input[0]);

  for (var i = 1; i <= 9; i++) {
      console.log(num1 + " * " +i + " = " + num1 * i);
  }

// 2번 (a+b-3)
//틀린놈
var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

var turn = parseInt(input[0]);

for (var i = 1; i <= turn[0]; i++) {
  var num1 = parseInt(input[1]);
  var num2 = parseInt(input[2]);
  console.log(num1+num2);
}
//맞는놈
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n'); //입력에 공백 = \n

for (var i = 1; i <= input[0]; i++) {
    var numbers = input[i].split(' ').map(Number);
    
    console.log(numbers[0] + numbers[1]);
}