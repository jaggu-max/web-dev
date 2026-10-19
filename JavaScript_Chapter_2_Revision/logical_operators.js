// && AND: both sides true; || OR: at least one true; ! NOT: reverses boolean
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false || true);  // true
console.log(false || false); // false
console.log(!true);          // false

let marks = 23;
if ((marks > 33 && marks <= 80) || !false) console.log("pass");
