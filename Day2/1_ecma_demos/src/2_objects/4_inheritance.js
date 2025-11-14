// class Vehicle {
//     constructor(m) {
//         this._make = m;
//     }

//     start() {
//         return `${this._make}, engine started`;
//     }
// }

// class FourWheeler extends Vehicle {}

// var v = new FourWheeler("Ford");
// console.log(v);
// console.log(v.start());

// ----------------------------------

class Vehicle {
    constructor(m) {
        this._make = m;
    }

    start() {
        return `${this._make}, engine started`;
    }
}

class FourWheeler extends Vehicle {
    constructor(mk, md) {
        super(mk);
        this._model = md
    }

    start() {
        let r = super.start();
        return `${r}, model is, ${this._model}`;
    }

    move() {
        return `Moving like, ${this._model}`;
    }
}

var v = new FourWheeler("Ford", "Mustang");
console.log(v.start());
console.log(v.move());