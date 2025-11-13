// console.log("Hello from Function file");

const i = 10
console.log("i is: ", i);
console.log("type of i is: ", typeof i);

const f = function() {
    return "Hello";
}

console.log("f is: ", f);
console.log("type of f is: ", typeof f);

// Function is a type, which can refer to a block of code

// Can we create a variable of type number?
// If yes; We should be able to create a variable of type function as well.

// Can we create a variable of type number inside a function?
// If yes; We should be able to create a variable of type function inside a function also.

// function f1() {
//     function f2() {

//     }
// }

// Can we return a variable of type number from a function?
// If yes; We should be able to return a variable of type function from a function also. (Closure/Currying/HOF)

function f1() {
    return {};
}



// Can we pass a variable of type number to a function?
// If yes; We should be able to pass a variable of type function to a function also. (Callbacks)

// document.getElementById("btn").addEventListener("click", function() {});

// document.getElementById("t1").value = 10;

// // Fn Declaration Syntax
// function hello1() {
//     return "Hello World";
// }

// // Fn Expression Syntax
// const hello2 = function () {
//     return "Hello World";
// }

// // Multiline Arrow Fn Syntax
// const hello3 = () => {
//     return "Hello World";
// }

// // Singleline Arrow Fn Syntax
// const hello4 = () => "Hello World";

// console.log(hello1());
// console.log(hello2());
// console.log(hello3());
// console.log(hello4());


var s = "Hello";

String.prototype.test = function() {
    return "Hi";
}

console.log(s.test());