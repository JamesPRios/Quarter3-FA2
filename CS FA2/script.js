function add() {
  const result = getNumbers()[0] + getNumbers()[1];
  displayResult(`The sum of ${getNumbers()[0]} and ${getNumbers()[1]} is ${result}.`);
}

function subtract() {
  const result = getNumbers()[0] - getNumbers()[1];
  displayResult(`The difference of ${getNumbers()[0]} and ${getNumbers()[1]} is ${result}.`);
}

function multiply() {
  const result = getNumbers()[0] * getNumbers()[1];
  displayResult(`The product of ${getNumbers()[0]} and ${getNumbers()[1]} is ${result}.`);
}

function divide() {
  const [num1, num2] = getNumbers();
  const result = num2 !== 0 ? (num1 / num2).toFixed(2) : "undefined (cannot divide by zero)";
  displayResult(`The quotient of ${num1} and ${num2} is ${result}.`);
}

function modulo() {
  const [num1, num2] = getNumbers();
  const result = num2 !== 0 ? num1 % num2 : "undefined (cannot divide by zero)";
  displayResult(`The remainder of ${num1} divided by ${num2} is ${result}.`);
}

function displayResult(message) {
  document.getElementById('result').textContent = message;
}

function getNumbers() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  return [num1, num2];
}
