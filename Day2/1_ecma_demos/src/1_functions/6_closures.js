'use strict'

// let count = 0;

// function next() {
//     return count += 1;
// }

// setInterval(() => {
//     console.log(next());
// }, 2000);

// setTimeout(()=>{
//     count = "abc";
// }, 5000);

// ------------------------------------------------

function getNext() {
    let count = 0;

    return function () {
        return count += 1;
    }
}

const next = getNext();

setInterval(() => {
    console.log(next());
}, 2000);

const next1 = getNext();

setInterval(() => {
    console.log(next1());
}, 5000);