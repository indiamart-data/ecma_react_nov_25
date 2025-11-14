'use strict'

let employees = [
    { id: 1, name: "Manish", city: "Pune" },
    { id: 2, name: "Neeraj", city: "Delhi" },
    { id: 3, name: "Abhijeet", city: "Pune" }
];

// let pune_employees = [];

// for(let i = 0; i < employees.length; i++) {
//     if(employees[i].city === "Pune") {
//         pune_employees.push(employees[i]);
//     }
// }

// console.log(pune_employees);

// ----------------------------------
// let pune_employees = [];

// function filterLogic(item) {
//     return item.city === "Pune";
// }

// for(let i = 0; i < employees.length; i++) {
//     if(filterLogic(employees[i])) {
//         pune_employees.push(employees[i]);
//     }
// }

// console.log(pune_employees);

// // ----------------------------------

// function filterLogic(item) {
//     return item.city === "Pune";
// }

// let pune_employees = employees.filter(filterLogic);

// console.log(pune_employees);

// // ---------------------------------- Anonymous Fns

// let pune_employees = employees.filter(function (item) {
//     return item.city === "Pune";
// });

// console.log(pune_employees);

// // ---------------------------------- Multiline Arrow Fns

// let pune_employees = employees.filter((item) => {
//     return item.city === "Pune";
// });

// console.log(pune_employees);

// ---------------------------------- Singleline Arrow Fns

let pune_employees = employees.filter(item => item.city === "Pune");

console.log(pune_employees);