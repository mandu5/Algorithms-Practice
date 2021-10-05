// 1번 (소수 찾기) <2부터 X-1까지 모두 나눠서 X가 소수인지 판별하는 문제 1>
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

function isPrime(n) {           // 소수 판별 함수 
    if (n === 2 || n === 3) {
        return true;
    }
    
    if (n <= 1 || n % 2 === 0) {
        return false;
    }
    
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
          return false;
        }
    }
    return true;
}

const N = Number(input.shift());
const numbers = input[0].split(" ").map(n => Number(n));
let count = 0;

for (i = 0; i < N; i++) {
    if (isPrime(numbers[i])) {
        count++;
    }
}
console.log(count);


// 2번 (소수) <2부터 X-1까지 모두 나눠서 X가 소수인지 판별하는 문제 2>
let input = require('fs').readFileSync("/dev/stdin").toString().split('\n');
 
let a = Number(input[0]);
let b = Number(input[1]);
let primeNumbers = [];
let sum = 0;

for(let n = a; n <= b; n++){
    for(let i = 2; i <= n; i++){
        if(i*i > n){
            primeNumbers.push(n);
            sum += n;
            break;
        }
        if(n % i === 0){
            break;
        }
    }
}
if(primeNumbers.length === 0){
    console.log(-1);
}else{
    console.log(sum);
    console.log(primeNumbers[0]);
}


// 3번 (소인수분해) <N을 소인수분해 하는 문제>
let input = require('fs').readFileSync("/dev/stdin").toString().trim();

let result = [];
for (let i = 2; i <= input; i++) {
    while (input % i === 0) {
    input = input / i;
    result.push(i);
  }
}
console.log(result.join("\n"));


// 4번 (소수 구하기) <에라토스테네스의 체 알고리즘은 다수의 자연수에 대하여 소수 여부를 판별할 때 사용하는 대표적인 알고리즘>

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let N = Number(input[0]);
let M = Number(input[1]);
let isPrimeNumber = Array(M + 1).fill(true); // 0부터 M까지 true로 채운 배열
isPrimeNumber[0] = isPrimeNumber[1] = false; // 0 과 1은 소수가 아니므로 false로 바꿔준다.

function result() { // 2부터 시작. 주어진값 N의 제곱근까지 i의 배수들을 모두 false로 만들어준다(i는 여전히 true)
  for (let i = 2; i <= Math.ceil(Math.sqrt(M)); i++) {
    if(isPrimeNumber[i]) {
      let m = 2; // 배수들을 구하기위해 곱해줄 수.
      while(i * m <= M) { 
        isPrimeNumber[i * m] = false; // i의 배수들을 false로 바꾼다.
        m++;  // i * m은 초기에 2 * 2 이고 m++ 해줌으로써 i + m은 2 * 3으로 바뀐다.
      }
    }
  }
  
  const results = []; // 결과값을 담을 배열.
  for(let i = N; i <= M; i++) { // N부터 M까지의 숫자 i가 소수인지 아닌지 확인하는 for문
    if(isPrimeNumber[i]) { 
		results.push(i); // i가 소수라면 results배열에 추가시켜준다.
    }
  }
  console.log(results.join('\n'));
}
result();


// 5번 (베르트랑 공준) <소수 응용 문제1>

