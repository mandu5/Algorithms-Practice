// 1) 숫자/문자열 배열에서 중복 제거

let values = [3, 1, 3, 5, 2, 4, 4, 4];
let uniqueValues = [...new Set(values)];
alert(uniqueValues); // [3, 1, 5, 2, 4]


// 2) 섭씨 온도를 화씨 온도로 바꾸기
let celsius = [-15, -5, 0, 10, 16, 20, 24, 32]
let fahrenheit = celsius.map(t => t * 1.8 + 32);

console.log(fahrenheit); // [5, 23, 32, 50, 60.8, 68, 75.2, 89.6]


// 3) A와 B의 합집합
let arrA = [1,4,3,2];
let arrB = [5,2,6,7,1];

[...new Set([...arrA, ...arrB])]; // [1,4,3,2,5,6,7]


// 4) A와 B의 교집합
let arrA = [1,4,3,2];
let arrB = [5,2,6,7,1];

arrA.filter(it => arrB.includes(it)); // [1, 2]


//--------------------------------------------------------------------------------------------------------------
users배열_응용

// 1) 간단한 검색
let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

let winner = users.filter(it => it.name.includes("Oli"));                                 // filter : 정보찾기

alert(winner); // { id: 97, name: 'Oliver', age: 28, group: 'admin' }


// 2) 특정 유저가 admin 권한을 갖고 있는지 확인
let hasAdmin = users.some(user => user.group === "admin");
console.log(hasAdmin); // hasAdmin is true


// 3) 특정 키의 "빈도"를 포함하는 객체 생성
let groupByAge = users.reduce((acc, it) => ({ ...acc, [it.age]: (acc[it.age] || 0) + 1}), {});

console.log(groupByAge); // {23: 1, 28: 2, 34: 1}


// 4) array of objects 인덱싱 (Lookup table)  <id로 데이터에 접근할 때 유용>
let uTable = users.reduce((acc, it) => ({...acc, [it.id]: it }), {})

uTable[85].name // "William"


// 5) 배열 안의 각각의 item에서 특정 키로 유일한 값들 뽑아내기 
let listOfUserGroups = [...new Set(users.map(it => it.group))]; // map()은 각 item의 group 값만 모아서 새로운 배열을 생성

console.log(listOfUserGroups); // ["editor", "admin"]


// 6) 명시된 키와 함께 읽기 가능한 string으로 유저 테이블 출력
let info = users.map(({id, age, group}) => `\n${id} ${age} ${group}`).join(""); // map으로 배열로 1차반환, join으로 합쳐서 하나의 문자열로 2차반환
console.log(info);


// 7) 객체 배열에서 key-value 쌍을 찾아서 바꾸기
let updatedUsers = users.map(p => p.id !== 47 ? p : {...p, age: p.age + 1}); //해석 = p를 p의 id가 47이 아니라면 p로 유지하고 47이 맞다면 1을 더해라

console.log(updatedUsers);