// Arrays are reference values.
let a = [1, 2, 3];
let b = a;
b[0] = 100;
console.log(a); // [100, 2, 3] — same array

// Make a shallow copy with spread syntax:
let original = [1, 2, 3];
let copy = [...original];
copy[0] = 9;
console.log(original); // [1, 2, 3]
console.log(copy); // [9, 2, 3]
