// 1차 다트게임 (2018 KAKAO BLIND RECRUITMENT)
function solution(dartResult) {
    return dartResult.split("").reduce((ac,v,i,ar)=>{
        return !isNaN(v) ? !isNaN(ar[i-1]) ? ac.concat(+(ac.pop()+v)) : [...ac,+v] :
            v=="D" ? ac.concat(ac.pop()**2) :
            v=="T" ? ac.concat(ac.pop()**3) :
            v=="*" ? ac.length > 1 ? ac.concat([ac.pop()*2, ac.pop()*2].reverse()) : ac.concat(ac.pop()*2) :
            v=="#" ? ac.concat(ac.pop()*-1) : ac;
    },[]).reduce((ac,v)=>ac+v);
}


// 체육복 (탐욕법:그리디)
const solution = (n, lost, reserve) => {
    let Lost = lost.filter(a => !reserve.includes(a)); // 여벌이 없는데 체육복을 잃어버린 학생
    let Reserve = reserve.filter(a => !lost.includes(a)); // 여벌이 있는데 체육복을 잃어버린 학생

    Lost = Lost.sort((x, y) => x - y); // 숫자 순서대로 정렬
    Reserve = Reserve.sort((x, y) => x - y);

    return n - Lost.filter(lostStudent => { // 앞, 뒤번호 학생 중 여벌이 있는지 확인
        let extra = Reserve.find(reserveStudent => Math.abs(reserveStudent - lostStudent) <= 1);
      	if(!extra) return true;   // 여벌이 없다면
      	Reserve = Reserve.filter(reserveStudent => reserveStudent !== extra);
    }).length;         // 여벌을 빌려준 뒤 Reserve 배열에서 해당 학생의 번호 제거
}


// K번째수 (정렬)
function solution(array, commands) {
    return commands.map(commands => {
        return array.slice(commands[0] - 1, commands[1]).sort((a, b) => a - b)[commands[2] - 1];
    });
}


// 완주하지 못한 선수 (해시)
function solution(participant, completion) { // sort로 간단하게 풀기
    const n = participant.length;
    let answer = "";
    
    participant.sort();
    completion.sort();
    
    for (let i = 0; i < n; i++){
        if (participant[i] !== completion[i]) {
            answer = participant[i];
            return answer;
        }
    }
}


// 모의고사 (완전탐색)
const solution = (answers) => {
    let students = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    let answer = [];
    
    for(let student of students) {
        answer.push(answers.reduce((acc,cur,idx) => (cur==student[idx % student.length] ? acc++ : acc,acc),0))
    }  
    return answer.reduce((acc,cur,idx) => (cur === Math.max(...answer) ? acc.push(idx+1) : acc,acc),[])
}


function solution(answers) {
    let answer = [];
    // 수포자들의 반복되는 규칙의 수를 배열로 저장
    let p1 = [1,2,3,4,5];      // 1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,.....
    let p2 = [2,1,2,3,2,4,2,5];
    let p3 = [3,3,1,1,2,2,4,4,5,5];
    // filter를 사용하여 answers를 탐색하면서 수포자들의 번호와 비교(완전탐색)
    let s1 = answers.filter((a, i) => a === p1[i%5]).length;    // a === p1[i]로도 탐색이 가능하지만,
    let s2 = answers.filter((a, i) => a === p2[i%8]).length;    // 위 p(n)의 숫자가 반복되기때문에 [i%5]을 사용.
    let s3 = answers.filter((a, i) => a === p3[i%10]).length;   // 결과: (index = 0,1,2,3,4,0,1,2,3,4,...)=반복
    // 세 사람의 점수 중 최대값 구하기
    let max = Math.max(s1, s2, s3);
    // 최대값과 일치한 점수를 가지면 answer에 저장
    if(s1===max) answer.push(1);
    if(s2===max) answer.push(2);
    if(s3===max) answer.push(3);

    return answer;
}


// 두 개 뽑아서 더하기 (월간 코드 챌린지 시즌 1)
function solution(numbers) {
    const answer = []
  
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) { 
            answer.push(numbers[i] + numbers[j]) 
        }  
    } 
    return answer.sort((a, b) => a - b).filter((v, i) => v !== answer[i + 1]);
}


// 내적 (월간 코드 챌린지 시즌 1)
function solution(a,b) {
    return a.reduce((sum, cur, i) => sum + cur * b[i], 0);
}


// 음양 더하기 (월간 코드 챌린지 시즌 2)
function solution(absolutes, signs) {
    return absolutes.reduce(
        (sum, cur, i) => sum + (cur * (signs[i] ? 1 : -1)), 0
    );
}


// 약수의 개수와 덧셈 (월간 코드 챌린지 시즌 2)
function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if(Number.isInteger(Math.sqrt(i)) ? answer -= i : answer += i); // 약수의 개수가 홀수 : 짝수
    }
    return answer;
}


// 나머지가 1이 되는 수 찾기 (월간 코드 챌린지 시즌 3)
function solution(n) {
    let answer = 0;
    for (let i = 0; i <= n; i++, answer++) {
        if(n % i === 1) break;
    }
    return answer;
}


// 없는 숫자 더하기 (월간 코드 챌린지 시즌 3)
function solution(numbers) {
    let answer = 0;
    for (let i = 0; i < 10; i++) {
        if(!numbers.includes(i)) answer += i;
    }
    return answer
}
function solution(numbers) {
    return 45 - numbers.reduce((sum, cur) => sum + cur, 0); // 1~10까지의 합(45)을 나머지 숫자 합에서 빼기
}


// 부족한 금액 계산하기 (위클리 챌린지)
function solution(price, money, count) {
    let answer = 0;
    for (let i = 0; i <= count; i++) {
        answer += price * i
    }
    return answer > money ? answer - money : 0;
}

// 최소직사각형 (위클리 챌린지)
function solution(sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]); // 배열속 배열 크기비교 후 정렬

    let maxSize = [0, 0];
    rotated.forEach(([w, h]) => { // 각 배열 하나마다: forEach
        if (w > maxSize[0]) maxSize[0] = w; // 비교하면서 max구하기
        if (h > maxSize[1]) maxSize[1] = h;
    })
    return maxSize[0] * maxSize[1];
}