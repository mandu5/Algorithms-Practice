// 가장 큰 수 (레벨 2)
function solution(numbers) {
  var answer = numbers
    .map((c) => c + "")
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

// H-index (레벨 2)
function solution(citations) {
  citations = citations.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}
