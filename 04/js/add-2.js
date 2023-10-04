function calcSum(n) {    // 매개 변수가 있는 함수 선언
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  document.write(`<h1>1부터 ${n}까지 더하면 ${sum}입니다.</h1>`);
}

calcSum(10);  // 인수값 가지고 함수 호출