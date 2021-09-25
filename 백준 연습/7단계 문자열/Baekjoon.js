// 1번 (아스키 코드)
let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let str = input.toString();
result = str.charCodeAt(0);

console.log(result);


// 2번 (숫자의 합)
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);
let ranNum = input[1].split('');
let sum = 0;

for (let i = 0; i < num; i++) {
  sum = sum + Number(ranNum[i]);
}

console.log(sum);


// 3번 (알파벳 찾기)
let input = require("fs").readFileSync("/dev/stdin").toString();

let result = [];

for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" ")); //join함수로 구분자를 공백으로 지정


// 4번 (문자열 반복)
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num1 = input.shift();

for (let i = 0; i < num1; i++) {
    let answer = '';
    
    const [num2, str] = input[i].split(" ");
    
    for (let j = 0; j < str.length; j++) {
        for (let k = 0; k < num2; k++) {
            answer += str[j];
  	    }
    }
    console.log(answer);
}


// 5번 (단어 공부)
let input = require("fs").readFileSync("/dev/stdin").toString().toLowerCase();

const result = new Array(26).fill(0); // a~z까지 배열생성 후 0추가

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 97] ++;   // a=97값을 빼주어 배열 인덱스를 잡아주고 배열을 1 증가. 입력값의 길이만큼 반복
}

const max = Math.max(...result);
const index = result.indexOf(max);

let isSame = false;

for (let j = 0; j < 26; j++) {  // 중복이 있다면 isSame = true
  if (result[j] === max && index != j) {
    isSame = true;
    break;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));
