// Q1. Get first n elements of an array.
let arr1 = [7, 9, 0, -2];
let n1 = 3;
console.log(arr1.slice(0, n1)); // [7, 9, 0]

// Q2. Get last n elements of an array.
let arr2 = [7, 9, 0, -2];
let n2 = 3;
console.log(arr2.slice(arr2.length - n2)); // [9, 0, -2]

// Q3. Check whether a string is blank or not.
// Run in a browser because prompt() is used.
let str3 = prompt("Please enter a string:");
if (str3.trim().length === 0) {
  console.log("string is empty/blank");
} else {
  console.log("string is not empty");
}

// Q4. Test whether a character at a given index is lowercase.
let str4 = "ApNaCoLlEgE";
let idx4 = 3;
if (
  str4[idx4] === str4[idx4].toLowerCase() &&
  str4[idx4] !== str4[idx4].toUpperCase()
) {
  console.log("character is lowercase");
} else {
  console.log("character is not lowercase");
}

// Q5. Strip leading and trailing spaces from a string.
// Run in a browser because prompt() is used.
let str5 = prompt("Please enter a string:");
console.log(`original string = ${str5}`);
console.log(`string without spaces = ${str5.trim()}`);

// Q6. Check if an element exists in an array.
let arr6 = ["hello", "a", 23, 64, 99, -6];
let item6 = 64;
if (arr6.indexOf(item6) !== -1) {
  console.log("element exists in array");
} else {
  console.log("element doesn't exist in array");
}
