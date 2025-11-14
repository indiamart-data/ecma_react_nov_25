'use strict';

// Constructor Function
const Person = (function () {
    function Person(name) {
        this._name = name;
    }

    Person.prototype.getName = function () {
        return this._name;
    }

    Person.prototype.setName = function (value) {
        this._name = value;
    }

    return Person;
})();

let p1 = new Person("Manish");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());

let p2 = new Person("John");
console.log(p2.getName());
p2.setName("Ramakant");
console.log(p2.getName());

console.log(p1);
console.log(p2);