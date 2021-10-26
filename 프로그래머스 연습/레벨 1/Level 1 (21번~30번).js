// 제일 작은 수 제거하기
function solution(arr) {
    const min = Math.min(...arr); // Math.min(arr[0], arr[1], arr[2], ...)
    const r = arr.filter(v => v !== min);  // min을 제외한 나머지 필터링
    return r.length ? r : [-1];  // 빈배열(length없을 시) -1리턴
}


// 짝수와 홀수
function solution(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}


// 최대공약수와 최소공배수 (최대공약수를 구하는 유클리드 호제법)
function solution(n, m) {
    function u(n, m) { return m % n ? u(m % n, n) : n; } // u = 유클리드 호제법 함수(재귀식 작성)
    const gcd = u(n, m);           //  gcd = 최대공약수
    return [gcd, n * m / gcd];     // 두 수의 곱은 최대공약수와 최소공배수의 곱과 같다 (따라서, 최소공배수 = 두 수 곱하기 / 최대공약수)
}


// 콜라츠 추측
function solution(num, count = 0) { // count = 반복작업
    return count === 500  // 반복작업을 500회나 했는데도 1이 안된다면, -1을 반환하라
        ? -1 
        : num === 1
            ? count
            : solution(num % 2 === 0 ? num / 2 : 3 * num + 1, count + 1); // 재귀 사용으로 반복 작업 줄이기
}


// 평균 구하기 
function solution(arr) {
    return arr.reduce((sum, current) => sum + current)/arr.length;
}


// 하샤드 수
function solution(x) {
    return !(x % String(x).split('').reduce((sum, current) => sum + current * 1, 0));
} // x를 나눌 수 있으면 0(falsy value)가 나오기때문에 앞에 !붙이기


// 핸드폰 번호 가리기
function solution(phone_number) {
    return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}
function hide_numbers(s) { // 정규식
    return s.replace(/\d(?=\d{4})/g, "*");
}


// 행렬의 덧셈
function solution(arr1, arr2) {
    return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}


// x만큼 간격이 있는 n개의 숫자
function solution(x, n) { // if x = 2, n = 5, solution(x, n) = [2,4,6,8,10]
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}


// 직사각형 별찍기
function solution(a, b) {
    return Array(b).fill().map(() => '*'.repeat(a)).join("\n");
}

