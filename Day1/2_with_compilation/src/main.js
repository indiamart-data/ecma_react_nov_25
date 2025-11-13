console.log("Hello from demo file!");

const obj = {
    arr: [1, 2, 3, 4, 5, 6],
    printArr() {
        console.log(...this.arr);                       // Array Spread Operator (ES6)
    },
    findItem(n) {
        console.log(this.arr.find(i => i === n));       // Array Find Method of ES6
    }
};

obj.printArr();
obj.findItem(3);