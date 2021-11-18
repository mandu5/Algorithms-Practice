// 1번;
function solution(arr) {
    let answer = [];
    let arr = arr.sort();
    let p1 = [1];      
    let p2 = [2];      
    let p3 = [3];      

    let s1 = arr.filter((a, i) => a === p1[i%1]).length;    
    let s2 = arr.filter((a, i) => a === p2[i%1]).length;    
    let s3 = arr.filter((a, i) => a === p3[i%1]).length;    

    let max = Math.max(s1, s2, s3);

    answer.push(max-s1);
    answer.push(max-s2);
    answer.push(max-s3);

    return answer;
}

//2번
let log = ["08:30", "09:00", "14:00", "16:00", "16:01", "16:06", "16:07", "16:11"]
function solution(log){
    let start = []; //짝수 
    let end = [];   //홀수
    let answer = [];
    log = log.map((v, i) => (i % 2 === 0 ? end.push(v) : start.push(v)));

    function convertH2M(timeInHour){
        let timeParts = timeInHour.split(":");
        return Number(timeParts[0]) * 60 + Number(timeParts[1]);
    }
    function timeConvert(n) {
        let num = n;
        let hours = (num / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        return "" + "0" + rhours + `:` + rminutes + "";
    }

    for(i = 0; i < (log.length)/2; i++) {
      let timeStart = convertH2M(start[i]); // 짝수 분
      let timeEnd = convertH2M(end[i]);     // 홀수 분
      let timeDiff = timeStart-timeEnd; 
      if (timeDiff < 5)  timeDiff = 0;
      if (timeDiff > 105)  timeDiff = 105;
      answer.push(timeDiff);
    }
    answer = answer.reduce((sum,current) => sum+current);
    return timeConvert(answer);
}


//3번
let ings = ["r 10", "a 23", "t 124", "k 9"];
ings = ings.join(",").replace(/ /g,"").split(",");
ing1 = ings[0]
ing2 = ings[1]
ing3 = ings[2]
ing4 = ings[3]
function solution(ings){
    let answer;
    ings = ings.replace(/[^0-9]/g, '');
    answer = parseInt(ings);
    return answer;
}
function integer(ing2){
    let answer;
    ing2 = ing2.replace(new RegExp("[(0-9)]", "gi"), "");
    answer = parseInt(ing2);
    return answer;
}
console.log(integer(ing2));


// 4번;
function solution(s) {
    let answer = [];
    s = s.split("");

    const arr = s;

    const result = arr.reduce((acc,curr)=> {
      acc.set(curr, (acc.get(curr)||0) +1) ;
      return acc;
    },new Map());
    
    for (let [key, value] of result.entries()) {
      document.write(value + '<br>');
    }
}
  function count (s) {  
    let count = [];
    s.split("").forEach(function(n) {
       count[n] ? count[n]++ : count[n] = 1;
    });
    return count;
  }
  count(s).sort();
  

