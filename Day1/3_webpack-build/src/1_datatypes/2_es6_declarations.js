'use strict'

// let a = 10;
// console.log(a);

// ------------------------- Hoisting is not supported
// a = 10;
// console.log(a);
// let a;

// ----------------------------------------- Not Typesafe
// let a = 10;
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);

// a = "Hello";
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);


// --------------------------------------------- Redeclaration
// You cannot create a variable with same name using let keyword
// let a = 10;
// let a = "Hello";
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);

let i = "Hello";
console.log("Before, i is:", i);

for (let i = 0; i < 5; i++) {
    console.log("Inside loop, i is:", i);
}

console.log("After, i is:", i);