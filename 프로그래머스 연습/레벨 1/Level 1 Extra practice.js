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

