// 큰 수 만들기 (레벨 2)
function solution(number, k) {
  var stack = []; // b : 최종 글자들이 저장될 스택 (숫자가 큰!)
  for (var i = 0; i < number.length; i++) {
    // 모든 숫자 비교
    var now = number[i]; // 현재 인덱스 숫자. 처음에는 그냥 push

    // 무조건 push 하고 다음 for 문에서 이전인덱스 숫자와 나랑 비교해서 현재인덱스가 이전인덱스보다 크면 pop하고 넣어줌. 제거하는 숫자인 (k)를 1 감소
    // 제거할 숫자를 다 채웠으면 그냥 넣음
    while (k > 0 && stack[stack.length - 1] < now) {
      stack.pop();
      k--;
    }
    stack.push(now);
  }
  // k가 0일 경우 스택은 그대로,
  // but k가 남아있으면 뒤에서부터 제거해준다. (ex. 1010,2 -> 11)
  stack.splice(stack.length - k, k);
  var answer = stack.join("");

  return answer;
}

// 구명보트 (레벨 2)
function solution(people, limit) {
  let answer = 0;
  people = people.sort((a, b) => b - a);

  for (let i = 0, j = people.length - 1; i <= j; i++, answer++) {
    if (people[i] + people[j] <= limit) j--;
  }
  return answer;
}
