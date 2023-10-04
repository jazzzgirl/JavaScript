function multiple(a, b) {
    return a * b;
}

let num1 = parseInt(prompt("첫 번째 수 입력")); 
let num2 = parseInt(prompt("두 번째 수 입력")); 

document.write(`${num1} * ${num2} = ${multiple(num1, num2)}`);