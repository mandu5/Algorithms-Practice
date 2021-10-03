// 1번 (소수 찾기)
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


// 2번 (소수)
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


// 3번 (소인수분해)
let input = require('fs').readFileSync("/dev/stdin").toString().trim();

let result = [];
for (let i = 2; i <= input; i++) {
    while (input % i === 0) {
    input = input / i;
    result.push(i);
  }
}
console.log(result.join("\n"));