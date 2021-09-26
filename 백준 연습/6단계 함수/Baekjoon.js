//1번 (셀프 넘버)
function d(n) {
    let number = n;
    let result = 0;

    for (let i = 0; i < String(n).length; i++) {
        // number를 10으로 나눠가면서 각 자리수를 result에 합한다.
        result += number % 10;
        number = Math.floor(number / 10);
    }
    return n + result;                          // 입력받은 수 와 result를 더하여 return
}

const range = 10000;
let selfNumbers = Array(range + 1).fill(true); //셀프넘버 배열을 생성하고 true로 초기화.

for (let i = 0; i <= range; i++) {
    selfNumbers[d(i)] = false;                 // 셀프넘버가 아니면 false로 변환.
}
for (let i = 0; i < range; i++) {
    if (selfNumbers[i]) {
        console.log(i);                        // true index만 출력
    }
}


// 2번 (한수)

let [n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
 
let N = Number(n);
let count = 0;

for (let i = 1; i <= N; i++) {
  let nArr = String(i);
  if (i < 100) { // 100 미만은 전부 한수
    count++;
    continue;
  }
  let A = Number(nArr[0]) - Number(nArr[1]); // 첫 두 값의 차이
  let B = Number(nArr[1]) - Number(nArr[2]); // 두번째와 세번째 값의 차이
  if (A === B) { // 값의 차이가 같을시: 등차수열 = 한수
    count++;
  }
}

console.log(count);