// 2018 KAKAO BLIND RECRUITMENT (1차 다트게임)
function solution(dartResult) {
    return dartResult.split("").reduce((ac,v,i,ar)=>{
        return !isNaN(v) ? !isNaN(ar[i-1]) ? ac.concat(+(ac.pop()+v)) : [...ac,+v] :
            v=="D" ? ac.concat(ac.pop()**2) :
            v=="T" ? ac.concat(ac.pop()**3) :
            v=="*" ? ac.length > 1 ? ac.concat([ac.pop()*2, ac.pop()*2].reverse()) : ac.concat(ac.pop()*2) :
            v=="#" ? ac.concat(ac.pop()*-1) : ac;
    },[]).reduce((ac,v)=>ac+v);
}
