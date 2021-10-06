// 1번 (손익분기점)
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = input[0] * 1;
const B = input[1] * 1;
const C = input[2] * 1;

const margin = C - B;
const count = Math.floor(A / margin) + 1 // 손익분기점을 넘기는수 = +1

console.log(margin <= 0 ? -1 : count); // margin=0일시, -1출력. 아닐 시 count 출력


// 2번 (벌집)
const input = require('fs').readFileSync('/dev/stdin');

let range = 1, block = 1;

while (block < input) {    
	block += 6 * range;  // 1, 7(6), 19(12), 37(18) (규칙: 범위가 증가할 때마다 방이 각 6,12,18,24씩 증가)

	range++;
}

console.log(range);


// 3번 (분수찾기) *
let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let number = Number(input);
let value = 1;
while (true) {
	number -= value;
	if (number <= 0) {
		number += value;
		break;
	}
	value++;
}

if (value % 2 === 1) {
	console.log(`${value - (number - 1)}/${1 + (number - 1)}`);
} else {
	console.log(`${1 + (number - 1)}/${value - (number - 1)}`);
}


// 4번 (달팽이는 올라가고 싶다)
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = input[0];
const B = input[1];
const V = input[2];
 
console.log(Math.ceil((V - B) / (A - B))); // 값이 딱 떨어지지 않는 수가 나오면 하루가 더 필요하다는 뜻이므로 .ceil메서드로 반올림


// 5번 (ACM 호텔) *
let [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let nArrNumber = Number(n);
let newArr = arr.map((e) => e.split(" "));
let nAnswer = "";

for (let i = 0; i < nArrNumber; i++) {
    let H = newArr[i][0],
        N = newArr[i][2];

    let answerH = N % H;
    if (answerH === 0) {
        answerH = H;
    }

    let answerW = Math.ceil(N / H);
    answerW < 10 ? (answerW = String(0) + answerW) : answerW;

    nAnswer += `${answerH}${answerW}` + "\n";
}

console.log(nAnswer);


// 6번 (부녀회장이 될테야)
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = Number(input.shift());

for (let i = 0; i < T; i++) {
    const k = +input.shift();
    const n = +input.shift();

    const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));// 각 방당 인원수를 저장할 배열 선언
    
    for (let i = 1; i <= n; i++) {   // 0층 (0층의 i호에는 i명이 산다)
        house[0][i] = i;
    }
    for (let i = 1; i <= k; i++) {   // 1 ~ k층 
        for (let j = 1; j <= n; j++) {
            house[i][j] = house[i - 1][j] + house[i][j-1];
        }
    }
    console.log(house[k][n]);  // k층 n호의 인원수 출력
}

// 7번 (설탕 배달)
let input = require('fs').readFileSync('/dev/stdin');

let count = 0;

while (true) {
    if (input % 5 === 0) {
        console.log(input / 5 + count);
        break;
    }
        
    if (0 > input) {
        console.log(-1);
        break;
    }

    count++;
    input -= 3;
}


// 8번 (큰 수 A+B)
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = BigInt(input[0]);
const B = BigInt(input[1]);

let answer = A + B;

console.log(answer.toString());

