// 1. Add function (check undefined arguments)
function add(a, b) {
  if (a === undefined || b === undefined) {
    return "Please provide two numbers for addition";
  }
  return a + b;
}

// 2. Subtract function (use ES6 default parameters)
function subtract(a = 0, b = 0) {
  return a - b;
}

// 3. Multiply function (use ES6 rest parameters)
function multiply(...numbers) {
  let result = 1;
  for (let num of numbers) {
    result *= num;
  }
  return result;
}

// 4. Divide function (use Arguments object)
function divide() {
  if (arguments.length < 2) {
    return "Please provide at least two numbers to divide";
  }
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    result /= arguments[i];
  }
  return result;
}

// Testing the functions
console.log("Add:", add(5, 10));          // 15
console.log("Add (missing arg):", add(5)); // Please provide two numbers for addition

console.log("Subtract:", subtract(20, 5)); // 15
console.log("Subtract (one arg):", subtract(20)); // 20 - 0 = 20

console.log("Multiply:", multiply(2, 3, 4)); // 24
console.log("Multiply (one arg):", multiply(5)); // 5

console.log("Divide:", divide(100, 2, 5)); // 10
console.log("Divide (missing arg):", divide(50)); // Please provide at least two numbers
