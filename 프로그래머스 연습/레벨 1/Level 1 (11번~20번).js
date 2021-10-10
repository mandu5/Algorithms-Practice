// 소수 찾기
function solution(n) {
    const primes = [];
    for (let j = 2; j <= n; j++) {
        let isPrime = true;
        const sqrt = Math.sqrt(j);
        for (let i = 0; primes[i] <= sqrt; i++) {
            if (j % primes[i] === 0) {
            isPrime = false;
            break;
            }
        }
        if (isPrime) {
            primes.push(j);
        };
    }
    return primes.length;
}

// 수박수박수박수박수 
function solution(n) {
    return '수박'.repeat(n).substr(0, n); // n번만큼 반복하고 0부터 n까지 자름
}


// 문자열을 정수로 바꾸기
function solution(s) {
    return Number(s);
}
function solution(s) {
    return parseInt(s);
}
function solution(s) {
    return s/1;
}


// 시저 암호
function solution(s, n) {
    let chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                 "
    return s.split('').map(e => chars[chars.indexOf(e)+n]).join('');
}
function solution(s, n) {
    let result = s.replace(/[a-z]/ig, c => [ c = c.charCodeAt(0), String.fromCharCode((c & 96) + (c % 32 + n - 1) % 26 + 1) ][1]);
    return result;
}


// 약수의 합 
Array(n).fill().map((v, i) => i + 1) = [1,2,3,...n] // 1부터 n까지 숫자를 만드는 메서드 (Array fill map 조합)
function solution(n) {
    return Array(n).fill().map((v, i) => i + 1).reduce((a, c) => n % c === 0 ? a + c : a, 0) // 나누어지면 약수이니 나눈 값을 더하고 안나눠지면 이전 값 그대로 사용
}
function solution(n) {
    return Array(n).fill().map((v, i) => i + 1).reduce((a, c) => n % c ? a : a + c, 0)
}


// 이상한 문자 만들기 (공백을 기준으로 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 변경)
function solution(s) {
    return s.split(' ').map(w => ( // 문제(s)를 공백을 기준으로 먼저 split하고 
      w.split('').map((v, i) => (i % 2 === 0 ? v.toUpperCase() : v.toLowerCase())).join('') // 단어(w)를 => 문자열을 기준으로 split
    )).join(' ');                                                // index(순서)가 짝수일시 대문자, 홀수일시 소문자 반환 그후 배열요소를 다시 문자열로 join
} 


// 자릿수 더하기
function solution(n) {
    return String(n).split('').reduce((sum, cur) => sum + cur * 1, 0); // 숫자에 *1해서 문자열을 숫자로
}
  

// 자연수 뒤집어 배열로 만들기
function solution(n) {
    return String(n).split('').reverse().map(v => +v); // .map()사용해서 문자열을 숫자로
}


// 정수 내림차순으로 배치하기 
function solution(n) {
    return +String(n).split("").sort((a, b) => a > b ? -1 : 1).join(""); // String에 +로 숫자로
}


// 정수 제곱근 판별
function solution(n) {
    return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1     // **2 = Math.pow(n, 2)
}
