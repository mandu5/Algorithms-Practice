// N으로 표현 (레벨 3)
function solution(N, number) {
    const set = new Array(8).fill().map(() => new Set());
    // [set() for x in range(8)]
    for(let i=0; i<8; i++){
        set[i].add(Number(N.toString().repeat(i+1)));
        console.log(set[-1])
        for (let j=0; j < i; j++) {
            for(const arg1 of set[j]){
                for(const arg2 of set[i-j-1]){
                    set[i].add(arg1+arg2);
                    set[i].add(arg1-arg2);
                    set[i].add(arg1*arg2);
                    set[i].add(arg1/arg2); // 자스는 0 나누는거 상관없음 -> infinity
                }
            }
        }
        if(set[i].has(number)) return i+1;
    }
    return -1;
}
// 솔루션
// N은 1 이상 9 이하입니다. =>
// pos에 각 i+1번 사용해서 만들수 있는 가능한 숫자들을 set으로 넣어둔다
// 초기화 : [{5}, {55}, {555}, {5555}, {55555}, {555555}, {5555555}, {55555555}]

// i+1번 사용해서 만들수 있는 가능한 숫자
// ex) i=3, i+1=4, 1번(0)+3번(2) & 2번(1)+2번(1) & 3번(2)+1번(0)
// 더해서 ==> i-1