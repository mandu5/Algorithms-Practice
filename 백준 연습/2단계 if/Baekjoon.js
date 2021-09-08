// 1번 (두 수 비교하기)
var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

if (a>b) {
    console.log(">");
} 
else if (a<b) {
    console.log("<");
} 
else {
    console.log("==");
} 


// 2번(시험 성적)
var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

var year = parseInt(input[0]);

if (year >= 90 && year <= 100) {
    console.log('A');
  } else if (year >= 80 && year < 90) {
    console.log('B');
  } else if (year >= 70 && year < 80) {
    console.log('C');
  } else if (year >= 60 && year < 70) {
    console.log('D');
  } else {
    console.log('F');
}


// 3번 (운년)
var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

var year = parseInt(input[0]);

if (year % 4 == 0 && year % 100 != 0 ) {
    console.log('1');
    } else if (year % 4 == 0 && year % 400 == 0) {
    console.log('1');
    } else {
        console.log('0');
}

//4번 (4분면 고르기)
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
    
var a = parseInt(input[0]);
var b = parseInt(input[1]);
if (a>0 && b>0) {
  console.log('1');
  } else if (a>0 && b<0) {
  console.log('4');
  } else if (a<0 && b>0) {
  console.log('2');
  } else {
      console.log('3');
  }
process.exit();
});


// 5번 (알람 시계 일찍 설정하기)

var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

var num1 = parseInt(input[0]);
var num2 = parseInt(input[1]);

num2 -= 45;  //num2에서 45를 뺀 수를 할당

if (num2 < 0) {
    num2 += 60;   //60분 할당-->
    num1--;       //대신 시간을 1시간 줄임

    if (num1 === -1) {   //만약 0시여서 위 if문에서 num1이 음수가 될시 23으로변환
        num1 = 23;
    }
}

console.log(num1 + ' ' + num2);