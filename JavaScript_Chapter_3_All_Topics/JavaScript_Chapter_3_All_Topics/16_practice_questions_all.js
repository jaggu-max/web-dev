// Practice Q1: first n elements
let a1 = [7, 9, 0, -2], n1 = 3;
console.log(a1.slice(0, n1)); // [7, 9, 0]

// Practice Q2: last n elements
let a2 = [7, 9, 0, -2], n2 = 3;
console.log(a2.slice(-n2)); // [9, 0, -2]

// Practice Q3: check if an element exists
console.log(a1.includes(9)); // true
console.log(a1.includes(100)); // false
