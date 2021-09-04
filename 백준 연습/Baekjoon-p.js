var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
//한줄 입력
var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split('\n');
//여러줄 입력

var a = parseInt(input[0]);

if (a>89) {
    console.log("A");
} 
else {
    console.log("Not A");
} 
