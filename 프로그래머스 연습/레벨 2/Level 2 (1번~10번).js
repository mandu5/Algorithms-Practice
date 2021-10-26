// 124나라의 숫자
function solution(n) {
    return n ? solution((n - (n % 3 || 3)) / 3) + (n % 3 || 4) : "";
}


// 가장 큰 정사각형 찾기


// 올바른 괄호
function solution(s){
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === '(' ? count++ : count--;
        if (count < 0) return false;
    }
    if (count !== 0) return false;
    return true;
}


// 다음 큰 숫자
function solution(n) {
    const bin = n.toString(2).match(/1/g).length;  //toString(2)로 이진법으로 바꾼 후, .math(/1/g).length로 1의 갯수를 구함
    while (n++) {  // 입력된 수에서 하나씩 ++
        if (n.toString(2).match(/1/g).length === bin) return n; // n과 n++된 값의 1의 갯수를 비교 (return으로 반복문을 멈춤)
    }
}


// 땅따먹기 (경우의 수를 구해 푸는 문제: 윗줄에서부터 한줄씩 내려와 누적 최대 점수 구하기+바로 밑 점수 못가는 규칙)
function solution(land) {
    return Math.max(...land.reduce((a, c, i) => {    // Math.max(...arr) = 배열을 spread하는 문법 = 전개 문법
        return [
            c[0] + Math.max(a[1], a[2], a[3]),  
            c[1] + Math.max(a[0], a[2], a[3]),
            c[2] + Math.max(a[0], a[1], a[3]),
            c[3] + Math.max(a[0], a[1], a[2]),
        ];
    }, [0, 0, 0, 0]));
}


// 숫자의 표현  
function solution(n) {
    return Array(n).fill().map((v, i) => i + 1).filter(v => (!(n % v) && v % 2) ).length;
} 


// 최댓값과 최솟값
function solution(s) {
    const o = s.split(' ').map(v => +v);
    return [Math.min(...o), Math.max(...o)].join(' ');
} // Math.min(...o), Math.max(...o) = 배열의 전개 문법


// 최솟값 만들기
function solution(A,B){
    const b = B.sort((p, c) => c - p);  // 두번째 배열 역순으로 정렬
    return A.sort((p, c) => p - c).map((v, i) => v * b[i]).reduce((a, c) => a + c, 0)
}   // A(첫번째 배열)은 오름차순으로 정렬 후 b의 각 index와 곱한것을 map. 그 후 그 값들을 하나씩 더하기


// 피보나치 수
function solution(n) { // 바텀업 방식
    const arr = [0, 1];
    for (let i = 1; i <= n; i++) {
        arr.push((arr[i - 1] + arr[i]) % 1234567);
    }   
    return arr[n];
}
function solution(n){  // 재귀적(탑다운)방식 <프로그래머스는 시간초과오류>
    return n < 2 ? n : solution(n-1) +solution(n-2);
}


// 행렬의 곱셈 (*)
function solution(arr1, arr2) {
    return Array(arr1.length).fill().map((r, i) => Array(arr2[0].length).fill().map((v, j) => arr1[i].reduce((a, c, k) => a + c * arr2[k][j], 0)))
}


// JadenCase 문자열 만들기
function solution(s) {  // split map join 삼단기법
    return s.split(' ').map(v => { 
        return v.split('').map((a, i) => i ? a.toLowerCase() : a.toUpperCase()).join('');
    }).join(' ');
}


// N개의 최소공배수
function solution(arr) {
    return arr.reduce((a, c) => {
        function u(n, m) { return m % n ? u(m % n, n) : n; }  // u = 유클리드 호제법 함수(재귀식 작성)
        return a * c / u(a, c);
    }, 1);
}
