'use strict';

// Constructor Function
function Person(name) {
    this._name = name;

    this.getName = function() {
        return this._name;
    }

    this.setName = function(value) {
        this._name = value;
    }
}

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