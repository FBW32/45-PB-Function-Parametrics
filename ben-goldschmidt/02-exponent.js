// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it. The default `exp` should be set to 2.
//
// Example: Calling the function with 2 and 4 will return 8 (2 to the power of 4), If you call it with just 2, it should return 4 (2 to the power of 2).

const exponent = (num, exp) => {
  let result = 1;

  if (exp !== undefined) {
    for (let i = 0; i < exp; i++) {
      result *= num;
    }
    return `With a number of ${num} and an exp of ${exp}, the reult is ${result}!`
  }
  else {
    let exp = 2;
    for (let i = 0; i < exp; i++) {
      result *= num;
    }
    return `With a number of ${num} and an exp of ${exp}, the reult is ${result}!`;
  }
};

console.log(exponent(3, 3)); // -> 27
// With a number of 3 and an exp of 3, the reult is 27!

console.log(exponent(3)); // -> 9
// With a number of 3 and an exp of 2, the reult is 9!