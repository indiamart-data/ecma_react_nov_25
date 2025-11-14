// 'use strict'

// function test1() {
//     console.log(this);
// }

// test1();

// const test2 = function () {
//     console.log(this);
// }

// test2();

// const self = this;
// console.log("File Context: ", self);

// const test3 = () => {
//     console.log(this);
//     console.log(self === this);
// }

// test3();

// ---------------------------------------------

// let p1 = {
//     id: 1,
//     name: "Manish",
//     toJson: function() {
//         console.log(JSON.stringify(this));
//     }
// }

// let p2 = {
//     id: 2,
//     name: "Abhijeet",
//     city: "Pune",
//     toJson: function() {
//         console.log(JSON.stringify(this));
//     }
// }

// p1.toJson();
// p2.toJson();

const toJson = () => {
    console.log(JSON.stringify(this));
}

let p1 = {
    id: 1,
    name: "Manish"
}

let p2 = {
    id: 2,
    name: "Abhijeet",
    city: "Pune",
}

// toJson.call(p1);
// toJson.call(p2);

// p1.toJson = toJson.bind(p1);
// p2.toJson = toJson.bind(p2);

// p1.toJson();
// p2.toJson();

// toJson(p1);

// ---------------------------

// var person = {
//     age: 0,
//     grow: function () {
//         this.age += 1;
//         console.log(this.age);
//     }
// }

var person = {
    age: 0,
    grow: () => {
        this.age += 1;
        console.log(this.age);
    }
}

// function Person() {
//     this.age = 0;
//     this.grow = () => {
//         this.age += 1;
//         console.log(this.age);
//     }
// }

// const person = new Person();

person.grow();
person.grow();
person.grow();

// document.getElementById("btn").addEventListener("click", person.grow.bind(person));

// setInterval(()=>{
//     person.grow();
// }, 2000);

// setInterval(person.grow.bind(person), 2000);
// setInterval(person.grow, 2000);
