// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...nums) => {
  let arr = nums;
  let sumOfNums = 0;
  arr.map((num) => (sumOfNums += num));
  return sumOfNums;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
