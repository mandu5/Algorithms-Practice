// 1번 (구구단)
var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");


var num1 = parseInt(input[0]);

    for (var i = 1; i <= 9; i++) {
        var gugu = num1 * i;
        console.log(num1 + "*" + i + "=" + gugu);
    }

    const fs = require("fs");
let stdin =
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `2`;

let num1 = parseInt(stdin);

for (var i = 1; i <= 9; i++) {
    var gugu = num1 * i;
    console.log(`${num1} * ${i} = ${gugu}`);
}

for (let i = 1; i <= 9; i++) {
  let gogo = number2 * i;
  console.log(`${number2} * ${i} = ${gogo}`);
}
