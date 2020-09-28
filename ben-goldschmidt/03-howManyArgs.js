// Create a function howManyArgs which returns the total amount of arguments passed to it.
// Example: passing 3 arguments when calling the function should return the number 3, passing 15 arguments should return the umber 15

const howManyArgs = (...arguments) => {
    if (undefined) {
        return `This has ${0} arguments.`;
    }
    else {
        let counter = 0;
        for (i = 0; i < arguments.length; i++) {
            counter += 1
        }
        return `This has ${counter} arguments.`;
    }
};

console.log(howManyArgs()); // -> 0
console.log(howManyArgs(1, false, "hello")); // -> 3
console.log(howManyArgs("better")); // -> 1

// This has 0 arguments.
// This has 3 arguments.
// This has 1 arguments.
