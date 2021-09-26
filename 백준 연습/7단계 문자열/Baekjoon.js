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


// 6번 (단어의 개수)
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" "); //.(trim) 시작과 끝의 공백 제거
 
console.log(input[0] === "" ? 0 : input.length);


// 7번 (상수)
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

const [a, b] = input.map(v => [...v].reverse().join(""));

console.log(a > b ? a : b); // 삼합 연산자, or Math.max 사용
// console.log(Math.max(a, b));


// 8번 (다이얼)
let input = require('fs').readFileSync('/dev/stdin').toString().split("");
input.pop();

let result = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'A' || input[i] === 'B' || input[i] === 'C') {
    result = result + 3;
  } else if (input[i] === 'D' || input[i] === 'E' || input[i] === 'F') {
    result = result + 4;
  } else if (input[i] === 'G' || input[i] === 'H' || input[i] === 'I') {
    result = result + 5;
  } else if (input[i] === 'J' || input[i] === 'K' || input[i] === 'L') {
    result = result + 6;
  } else if (input[i] === 'M' || input[i] === 'N' || input[i] === 'O') {
    result = result + 7;
  } else if (input[i] === 'P' || input[i] === 'Q' || input[i] === 'R' || input[i] === 'S') {
    result = result + 8;
  } else if (input[i] === 'T' || input[i] === 'U' || input[i] === 'V') {
    result = result + 9;
  } else if (input[i] === 'W' || input[i] === 'X' || input[i] === 'Y' || input[i] === 'Z') {
    result = result + 10;
  }
}

console.log(result);


// 9번 (크로아티아 알파벳)
let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(input) {
  for (let alphabet of croatia) {
    input = input.split(alphabet).join("A");
  }

  return input.length; // return input일 경우 QeQQak를 반환한다.
}

console.log(solution(input));


// 10번 (그룹 단어 체커)
let [N, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

let numWords = Number(N);
let count = 0;

for (let i = 0; i < numWords; i++) {
  let newArr = [];
  let nowArr = arr[i];

  for (let j = 0; j < nowArr.length; j++) {
    if (newArr.indexOf(nowArr[j]) === -1 || nowArr[j - 1] === nowArr[j]) {
      newArr += nowArr.slice(j, j + 1);
    } else {
      break;
    }
  }

  if (newArr.length === nowArr.length) {
    count++;
  }
}

console.log(count);


