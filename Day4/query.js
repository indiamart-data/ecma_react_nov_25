function y(x) {
    return function () {
        console.log("Y Called");
    }
}

function y1(x) {
    return function () {
        console.log("Y Called");
        x();
    }
}

function y2(x) {
    console.log("Y Called");
    x();
}

let r1 = y(() => { console.log("Outer Fn 1"); })
let r2 = y1(() => { console.log("Outer Fn 2"); })
let r3 = y2(() => { console.log("Outer Fn 3"); })

console.log(r1);
console.log(r2);
console.log(r3);

// document.getElementById("btn").addEventListener("click", r1);
// r1();
// r2();