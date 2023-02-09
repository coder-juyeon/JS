//  map(기존값 => 변경할 값)

// 1~100까지 합 출력
let arData = new Array(100).fill(0).map((data, i) => i+1 );

let sum = arData.reduce((result, data) => result + data)
console.log(sum);
