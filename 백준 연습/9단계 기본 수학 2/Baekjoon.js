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

for(let n = a; n <= b; n++) {
    for(let i = 2; i <= n; i++) {
        if(i*i > n) {
            primeNumbers.push(n);
            sum += n;
            break;
        }
        if(n % i === 0){
            break;
        }
    }
}
if(primeNumbers.length === 0) {
    console.log(-1);
} else {
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
                isPrimeNumber[i * m] = false; // i의 배수들(2의 배수들)은 소수가 아니므로 false로 바꾼다.
                m++;  // i * m은 초기에 2 * 2 이고 m++ 해줌으로써 i + m은 2 * 3으로 바뀐다.
            }
        }
    }
    const results = []; // 결과값을 담을 배열
    for(let i = N; i <= M; i++) { // N부터 M까지의 숫자 i가 소수인지 아닌지 확인하는 for문
        if(isPrimeNumber[i]) { 
            results.push(i); // i가 소수라면 results배열에 추가시켜준다.
        }
    }
    console.log(results.join('\n'));
}
result();


// 5번 (베르트랑 공준) <소수 응용 문제1> <n초과 2n이하의 소수의 갯수를 구하는 문제>
let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
inputs.pop(); //맨 뒤 엘리먼트 삭제

for (let i = 0; i < inputs.length; i ++) {
    let input = Number(inputs[i]);
    let input2 = input * 2;

    let isPrimeNumber = Array(input2 + 1).fill(true); // 0부터 최댓값인 input2까지의 배열을 true로 채운다
    isPrimeNumber[0] = isPrimeNumber[1] = false;      // 0과 1은 소수가 아니므로 false로 바꿔줌

    function PrimeNumber() {
        for(let i = 2; i <= Math.ceil(Math.sqrt(input2)); i++) {
            if(isPrimeNumber[i]) {
                let m = 2;
                while(i * m <= input2) {
                    isPrimeNumber[i * m] = false;  // 2의 배수들(4부터)은 소수가 아니니 false로 바꿔줌 <중첩 호출=재귀>
                    m++;
                }
            }
        }
        let results = [];

        for(let i = input + 1; i <= input2; i++) { // 남아있는 수 중 그 다음으로 작은수인 i를 찾아 반복할 수 없을때까지 반복
            if(isPrimeNumber[i]) {
                results.push(i);
            }
        }
        console.log(results.length);
    }
    PrimeNumber();
}


// 6번 (골드바흐의 추측) <에라토스테네스의 체 사용>
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(n => Number(n));

const n = 2;
const m = 10000;

let prime = [];
for (let i = n; i <= m; i++) {
    prime[i] = i;
}
for (let i = 2; i <= m; i++) {
    if (prime[i] === 0) continue;
    for (let j = i + i; j <= m; j += i) {
        prime[j] = 0;
    }
}
prime = prime.filter(n => n !== 0);


for (let i = 0; i < input.length; i++) {               // 테스트케이스 하나씩 반복                                            
    const num = Number(input[i]);
    let answer = [];                                   // 가능한 골드바흐 파티션을 저장할 배열

    for (let j = 0; prime[j] < num / 2 + 1; j++) {     // 주어진 수의 절반보다 작은 소수만 탐색하면 됨
        const index = prime.indexOf(num - prime[j]);   // (주어진 수 - 소수)가 소수인지
        if (index !== -1) {                            // 소수라면
        answer.push([prime[j], prime[index]]);         // 골드바흐 파티션이므로 배열에 저장
        }
    }
    if (answer.length !== 0) {                         // 골드바흐 파티션이 존재했다면
        const a = answer.pop();                        // 가장 마지막 파티션을 가져옴 (두 소수의 차이가 가장 작음)
        console.log(`${a[0]} ${a[1]}`);                // 출력
    }
}
만약 가능한 n의 골드바흐 파티션이 여러 가지인 경우에는 두 소수의 차이가 가장 작은 것을 출력한다.

이 부분을 만족시키려고 하다보니 많은 시간이 소요되었다.

처음에는 주어진 수 - 소수가 소수인지 판별한 뒤 소수라면 바로 출력하였는데, 그럴 경우 두 소수의 차이가 큰 것이 출력되는 문제가 발생하였다.

가능한 골드바흐 파티션을 모두 구해 살펴보았더니, 10의 경우 [3, 7], [5, 5], [7, 3]이 나왔다. 여기서 문제는 [3, 7]과 대칭인 [7, 3]이었다. 필요하지 않은 연산을 더 하고 마지막 출력에 어려움을 주었기 때문에 for문의 조건을

for (let j = 0; prime[j] < num / 2 + 1; j++) {
로 주어 대칭되는 파티션을 제거하였다. 그랬더니 가장 마지막에 있는 파티션이 두 소수의 차이가 가장 작은 것이었고, 출력할 때 마지막 파티션을 출력해주어 해결하였다.