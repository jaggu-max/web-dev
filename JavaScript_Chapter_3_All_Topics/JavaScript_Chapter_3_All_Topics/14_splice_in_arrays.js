let arr = ["red", "green", "blue", "yellow"];
arr.splice(1, 1); // from index 1, remove 1 element
console.log(arr); // ["red", "blue", "yellow"]

arr.splice(1, 0, "purple"); // at index 1, remove 0, insert purple
console.log(arr); // ["red", "purple", "blue", "yellow"]
