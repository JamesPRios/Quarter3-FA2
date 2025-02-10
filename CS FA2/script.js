function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultText = "Please enter valid numbers.";
  
    if (!isNaN(num1) && !isNaN(num2)) {
      let result;
      switch (operator) {
        case '+':
          result = num1 + num2;
          resultText = `The sum of ${num1} and ${num2} is ${result}.`;
          break;
        case '-':
          result = num1 - num2;
          resultText = `The difference of ${num1} and ${num2} is ${result}.`;
          break;
        case '*':
          result = num1 * num2;
          resultText = `The product of ${num1} and ${num2} is ${result}.`;
          break;
        case '/':
          result = num2 !== 0 ? (num1 / num2).toFixed(2) : "undefined (cannot divide by zero)";
          resultText = `The quotient of ${num1} and ${num2} is ${result}.`;
          break;
        case '%':
          result = num2 !== 0 ? num1 % num2 : "undefined (cannot divide by zero)";
          resultText = `The remainder of ${num1} divided by ${num2} is ${result}.`;
          break;
      }
    }
  
    document.getElementById('result').textContent = resultText;
  }
