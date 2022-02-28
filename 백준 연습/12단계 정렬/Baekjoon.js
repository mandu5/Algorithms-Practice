// 1번 (수 정렬하기)
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

input.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}

// 5번 (소트인사이드)
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((num) => parseInt(num));

console.log(input.sort((a, b) => b - a).join(""));

// 6번 (좌표 정렬하기)
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();
const coordsArr = input.map(coords =>
  coords.split(' ').map(nums => parseInt(nums))
);

let results = '';
coordsArr
  .sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  })
  .forEach(coords => {
    results += `${coords[0]} ${coords[1]}\n`;
  });

console.log(results);

// 7번 (좌표 정렬하기 2)
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();
const coordsArr = [];

for (let i = 0; i < N; i++) {
  coordsArr.push(input[i].split(' ').map(strNum => parseInt(strNum)));
}

let results = '';
coordsArr
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  })
  .forEach(coords => (results += `${coords[0]} ${coords[1]}\n`));

console.log(results);

// 8번 (단어 정렬)
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
const sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
const uniqueValues = new Set(sorted);
console.log(Array.from(uniqueValues).join('\n'));

// 9번 (나이순 정렬)
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

input.shift();
input.sort((a, b) => parseFloat(a) - parseFloat(b));

console.log(input.join("\n"));

// 10번 (좌표 압축)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  [n, x] = input;
  x = x.split(" ").map((i) => Number(i));

  const answer = [];
  const set = Array.from(new Set([...x])).sort((a, b) => a - b);
  const object = {};

  set.forEach((item, idx) => (object[item] = idx));

  for (let i = 0; i < x.length; i++) {
    answer.push(object[x[i]]);
  }
  return answer.join(" ");
}
console.log(solution(input));