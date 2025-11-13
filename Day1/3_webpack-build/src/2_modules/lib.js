// Case 1 - Default Export
// export default function square(x) {
//     return x * x;
// }

// // Case 2 - Named Export
// export function square(x) {
//     return x * x;
// }

// Only one default export allowed per module.
// Case 3 - Multiple Export
export default function square(x) {
    return x * x;
}

export function check(x) {
    return `Checked: ${x}`;
}

export function test(x) {
    return `Tested: ${x}`;
}