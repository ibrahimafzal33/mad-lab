function SolveThis(inputObj) {
  let result = {}; // empty object to store answers

  // go through every key in the input object
  for (let key in inputObj) {
    let values = inputObj[key]; // the array of numbers for that key

    switch (key) {
      case "sum":
        result[key] = values.reduce((a, b) => a + b, 0);
        break;

      case "max":
        result[key] = Math.max(...values);
        break;

      case "min":
        result[key] = Math.min(...values);
        break;

      case "abs":
        result[key] = Math.abs(values[0]); // just take first number
        break;

      case "ceil":
        result[key] = Math.ceil(values[0]);
        break;

      case "floor":
        result[key] = Math.floor(values[0]);
        break;

      case "round":
        result[key] = Math.round(values[0]);
        break;

      case "random":
        result[key] = Math.random(); // random number between 0 and 1
        break;

      default:
        result[key] = "Unknown operation";
    }
  }

  return result; // return the final object
}

// Example
console.log(
  SolveThis({
    sum: [3, 2, 4],
    max: [2, 4, 3, 5],
    min: [5, 3, 4, 3],
    abs: [-9],
    ceil: [2.3],
    floor: [2.9],
    round: [2.5],
    random: []
  })
);

