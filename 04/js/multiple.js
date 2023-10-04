function multiple(a, b = 5, c = 10) {
  return a * b + c;
}

document.write(`<h1>${multiple(5, 10, 20)}</h1>`);  // a=5, b=10, c=20
document.write(`<h1>${multiple(10, 20)}</h1>`);  // a=10, b=20, c=10(default)
document.write(`<h1>${multiple(10)}</h1>`);  // a=10, b=5(default), c=10(default)