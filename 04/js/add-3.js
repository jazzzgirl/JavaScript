function calcSum(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;  // 함수를 호출한 곳으로 돌려 줌.
}

let num = parseInt(prompt("몇까지 더할까요?")); 
                // 입력 받은 수를 인수를 가지고 함수 호출
document.write(`<h1>1부터 ${num}까지 더하면 ${calcSum(num)}입니다.</h1>`);