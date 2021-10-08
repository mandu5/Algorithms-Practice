// 2016년
// month는 0 부터 시작, getDay가 요일을 가져오는 메서드
function solution(a, b) {
    return ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][new Date(2016, a - 1, b).getDay()];
}


// 가운데 글자 가져오기
// substr으로 문자열을 자르고 시작 인덱스를 찾기 (중간점찾기: s.length/2)
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}


// 같은 숫자는 싫어 (이런문제는 필연적으로 반복문 필요 = 어떻게 중복을 제거할 지)
// filter 메서드 = 반복문을 돌면서 숫자를 없앨 수 있는 메서드
function solution(arr) {
    return arr.filter((v, i) => v !== arr[i + 1]); // 다음 숫자랑 같은 숫자 제거
}
  

// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    const answer = arr.filter(el => el % divisor === 0);
    return answer.length ? answer.sort((p, c) => p - c) : [-1];
}


// 두 정수 사이의 합
function solution(a, b) {
    a > b && ([a, b] = [b, a]); // 숫자가 역순으로 주어지는 경우 쓸때 편리한 문법
    return Array(b - a + 1).fill().map((v, i) => v + i).reduce((a, c) => a + c);
}
function solution(a, b) { // 가우스 방식으로 풀기
    return (a + b) * ((a > b ? a - b : b - a) + 1) / 2;
}


// 문자열 내 마음대로 정렬하기
function solution(strings, n) { // 문자열과 문자열을 비교하고 정렬순서에 따른 비교할 수 있음(사전순-알파벳순으로 정렬 가능)
    return strings.sort((p, c) => p[n] === c[n] ? p.localeCompare(c) : p[n].localeCompare(c[n]))
}


// 문자열 내 p와 y의 개수
// 1) 함수형 메서드 사용
function solution(s) { // 문자열을 배열로 만들어서 각 단어가 p나 P인지, 또는 y나 Y인지를 찾아서 필터링 후, 개수를 비교
    const p = s.split('').filter(v => ['p', 'P'].includes(v));
    const y = s.split('').filter(v => ['y', 'Y'].includes(v));
    return p.length === y.length;
}
// 2) 정규표현식 사용
function solution(s){ // g = 모두 찾는다는 뜻, i = 대소문자 구분 안 한다는 뜻
    return s.replace(/p/gi, '').length == s.replace(/y/gi, '').length;
}


// 문자열 내림차순으로 배치하기 (알파벳 역순으로 정렬하기 + 대문자는 소문자보다 작은것으로 간주(맨뒤에)=localCompare 사용 불가)
function solution(s) {
    return s.split("").sort((prev, cur) => cur.charCodeAt() - prev.charCodeAt()).join("");
}
function solution(s) { // 위와 같은 결과 실행
    return s.split("").sort((prev, cur) => cur > prev ? 1 : -1).join("");
}


// 문자열 다루기 기본
function solution(s) {
    return /^[0-9]+$/.test(s) && [4,6].includes(s.length);
}
/^[0-9]+$/ // 대신 정규표현식 \d 사용하면됨 (프로그래머스 지원 X) 
[4,6].includes(s.length) // = (s.length === 4 || s.length ===6) 


// 서울에서 김서방 찾기
function solution(seoul) { // 문자열 위치
    return "김서방은" + seoul.indexOf('Kim') + "에 있다";
}
