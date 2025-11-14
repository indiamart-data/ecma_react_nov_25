// function greetings(message, name) {
//     console.log(message + ", " + name);
// }

// greetings("Good Morning", "Manish");
// greetings("Good Morning", "Ramakant");
// greetings("Good Morning", "Abhijeet");

// function Converter(toUnit, factor, offset, input) {
//     return [((offset + input) * factor).toFixed(2), toUnit].join("");
// }

// console.log(Converter(" INR", 83.55, 0, 100));
// console.log(Converter(" INR", 83.55, 0, 250));
// console.log(Converter(" INR", 83.55, 0, 699));
// console.log(Converter(" INR", 83.55, 0, 999));

// ------------------------------------

function greetings(message) {
    return function (name) {
        console.log(message + ", " + name);
    }
}

// const mGreet = greetings("Good Morning");

// mGreet("Manish");
// mGreet("Abhijeet");
// mGreet("Ramakant");

// const aGreet = greetings("Good Afternoon");

// aGreet("Manish");
// aGreet("Abhijeet");
// aGreet("Ramakant");

function Converter(toUnit, factor, offset) {
    return function (input) {
        return [((offset + input) * factor).toFixed(2), toUnit].join("");
    }
}

const usdToInrConverter = Converter(" INR", 83.55, 0);
console.log(usdToInrConverter(100));
console.log(usdToInrConverter(250));
console.log(usdToInrConverter(699));
console.log(usdToInrConverter(999));

const milesToKmConverter = Converter(" KM", 1.60934, 0);
console.log(milesToKmConverter(10));
console.log(milesToKmConverter(25));
console.log(milesToKmConverter(69.9));
console.log(milesToKmConverter(99.9));