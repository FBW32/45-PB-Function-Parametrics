// Parametrics
// Complete the following tasks:

// Complete the function in twofer.js so that it returns "Two for me and one for you" when no arguments are passed
// e.g

const twofer = who => {
    if (typeof who === 'string') {
    return `Two for me and one for ${who}`;
  } else {
    return `Two for me and one for you`;
  }
  };
  console.log(twofer("Fran")); // -> "Two for me and one for Fran"
  console.log(twofer());

// Complete the function in exponent.js so that it still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.
const exponent = (num, exp) => {
    let result = 1;
    if (exp !== undefined) {  
    for (let i = 0; i < exp; i++) {
      result *= num
    }
    return result;
}
    else {
        return Math.pow(num, 2);
    }
  };
  
  console.log(exponent(3, 3)); // -> 27
  console.log(exponent(3)); // -> 9
  

// Create a function in howManyArgs.js which returns the total amount of arguments passed to it.
const howManyArgs = () => {};

console.log(howManyArgs()); // -> 0
console.log(howManyArgs(1, false, "hello")); // -> 3
console.log(howManyArgs("better")); // -> 1

//OR
function func1() {}
function func2(a, b) {}
console.log(func1.length);// 0
console.log(func2.length); //2

// Create a function in sum.js which accepts any amount of numbers and return the sum of their addition
const sum = (...args) => {
    let total=0;
    for(let i in args) { 
        total += args[i];
    }
    return total;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70

// Bonus: Create a function in average.js which accepts any amount of numbers and returns their mean average.

const average = (...numbers) => {
    let avg = 0
    for(let i in numbers) { 
        avg += numbers[i]/ numbers.length;
    }
    return avg;

};

console.log(average(0)); // -> 0
console.log(average(1, 2)); // -> 1.5
console.log(average(1, 3, 6, 10)); // -> 5
console.log(average(12, 14, 16)); // -> 14

// Note: Feel free to add more console.log()s to each file to test your function further. but please do not delete the exisiting console.logs or rename the function.