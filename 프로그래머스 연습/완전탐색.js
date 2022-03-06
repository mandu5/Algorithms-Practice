// 소수찾기 (레벨 2)
function solution(numbers) {
  const arr = numbers.split("");
  const answer = new Set();

  // 처음엔 배열과 빈 문자열을 파라미터로 넣는다.
  getNumber(arr, "");

  function getNumber(numbersArr, currentNumber) {
    if (numbersArr.length) {
      // arr 수만큼 돈다.
      for (let i = 0; i < numbersArr.length; i++) {
        // temp array 변수를 지정한다.
        const temp = [...numbersArr];

        // temp에서 i번째 값을 하나 떼온다.
        temp.splice(i, 1);

        // 소수 체크
        if (isPrime(parseInt(currentNumber + numbersArr[i]))) {
          answer.add(parseInt(currentNumber + numbersArr[i]));
        }

        // 재귀로 순서가 바뀐 temp, 현재 수 + 이번에 바뀐 수를 호출한다.
        getNumber(temp, currentNumber + numbersArr[i]);
      }
    }
  }

  function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  return answer.size;
}

// 카펫 (레벨 2)
// brown + yellow = (yellow_row + 2) * (yellow_col + 2)
function solution(brown, yellow) {
  const answer = [];

  for (let i = brown + yellow; i > 1; i--) {
    // brown, yellow의 약수 찾기
    if ((brown + yellow) % i === 0) {
      // col의 가능성이 있는 친구들 찾기
      let col = (brown + yellow) / i + 2;
      // col은 이미 2를 더한 값이기 때문에 아래에서는 총 4를 빼준다.
      if ((col - 4) * (i - 2) === yellow) {
        // 큰 값이 row, 작은 값이 col
        const max = Math.max(...[i, col - 2]);
        const min = Math.min(...[i, col - 2]);

        // 최종 정답
        answer.push(max, min);

        // 찾으면 멈춰준다
        break;
      }
    }
  }

  return answer;
}
function solution(brown, red) {
  for (var i = 3; i <= (brown + red) / i; i++) {
    var x = Math.floor((brown + red) / i);
    if ((x - 2) * (i - 2) === red) {
      break;
    }
  }

  return [x, i];
}
