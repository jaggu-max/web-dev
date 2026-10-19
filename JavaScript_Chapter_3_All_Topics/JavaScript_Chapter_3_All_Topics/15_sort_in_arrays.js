let fruits = ["banana", "apple", "mango"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "mango"]

let numbers = [100, 5, 20, 3];
numbers.sort((a, b) => a - b); // numeric ascending
console.log(numbers); // [3, 5, 20, 100]
