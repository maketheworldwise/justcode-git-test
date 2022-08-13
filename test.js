// 1부터 50의 자연수 중 짝수를 구하는 함수

function even() {
  let result = [];
  for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(even());
