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

