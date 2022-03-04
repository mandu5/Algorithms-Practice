// 타겟 넘버 (레벨 2)
function solution(numbers, target) {
  var answer = 0;
  // 처음 시작은 개수 0개, 합계 0 으로 시작하면서 모든 경우를 dfs로 탐색
  dfs(0, 0);
  return answer;

  function dfs(count, sum) {
    // leaf node 도착했을 때, 모든 numbers 탐색
    if (count === numbers.length) {
      // 주어진 조건에 만족하면 answer++
      if (sum === target) {
        answer++;
      }
      // 리턴해주어야함
      return;
    }

    // left child 는 +일 경우
    dfs(count + 1, sum + numbers[count]);
    // right child 는 -일 경우
    dfs(count + 1, sum - numbers[count]);
  }
}

// 네트워크 (레벨 3)
function solution(n, computers) {
  let answer = 0;
  const visited = [];

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i, visited, computers); // 방문하지 않은 노드에서 dfs 탐색
      answer++; // 해당 시점에서는 위의 조건문으로 이미 위에 dfs 탐색에서 방문된 노드는 더 이상 방문하지 않는 것이 보장됨
      // 따라서 그냥 방문 후 개수 count 해도 중복 발생 X
    }
  }

  return answer;
}

const dfs = (node, visited, computers) => {
  visited[node] = true; // 현재 node를 방문처리 하고
  for (let i = 0; i < computers.length; i++) {
    if (computers[node][i] === 1 && !visited[i])
      // 연결된 노드가 있고 해당 노드를 방문하지 않았다면
      dfs(i, visited, computers); // dfs로 방문 진행
  }
};
// 단어 변환 (레벨 3)
function solution(begin, target, words) {
  let answer = 0;
  let visited = [];
  let queue = [];

  if (!words.includes(target)) return 0; //words배열에 target이 없으면 0을 반환

  queue.push([begin, answer]); //일단 queue에 [시작단어, 변경횟수]를 배열형태로 넣는다.

  while (queue) {
    let [v, cnt] = queue.shift(); //queue의 맨 왼쪽 값을 꺼낸다.

    if (v === target) {
      //꺼낸값의 v가 맞으면 cnt는 횟수 이므로 cnt를 return한다.
      return cnt;
    }

    words.forEach((word) => {
      let notEqual = 0; //다른갯수를 구하기위해 변수를 선언한다.

      if (visited.includes(word)) return; //방문했던 단어면 pass

      for (let i = 0; i < word.length; i++) {
        if (word[i] !== v[i]) notEqual++; //word를 반복하면서 다른 알파벳의 갯수를 체크한다
      }

      if (notEqual === 1) {
        //만약 다른게 1개라면
        queue.push([word, ++cnt]); //queue에 [단어, 횟수] 형태로 넣는다.
        //처음으로 따지면 hit -> hot이 되었을 때가 1이 된다.
        visited.push(word); //방문처리를 해준다.
      }
    });
  }

  return answer;
}
// 여행경로 (레벨 3)
function solution(tickets) {
  let answer = [];
  const result = [];
  const visited = [];

  tickets.sort();

  const len = tickets.length;
  const dfs = (str, count) => {
    result.push(str);

    if (count === len) {
      answer = result;
      return true;
    }

    for (let i = 0; i < len; i++) {
      if (!visited[i] && tickets[i][0] === str) {
        visited[i] = true;

        if (dfs(tickets[i][1], count + 1)) return true;

        visited[i] = false;
      }
    }

    result.pop();

    return false;
  };

  dfs("ICN", 0);

  return answer;
}
