// Q1: Print good if divisible by 10, otherwise bad.
let num = 20;
if (num % 10 === 0) console.log("good");
else console.log("bad");

// Q2: Run in a browser because prompt() and alert() are browser APIs.
// let name = prompt("Please enter your name");
// let age = prompt("Please enter your age");
// alert(`${name} is ${age} years old.`);

// Q3: Print months in a quarter using switch.
let quarter = 1;
switch (quarter) {
  case 1: console.log("January, February, March"); break;
  case 2: console.log("April, May, June"); break;
  case 3: console.log("July, August, September"); break;
  case 4: console.log("October, November, December"); break;
  default: console.log("NOT A QUARTER!");
}

// Q4: Golden string starts with A/a and length > 5.
let str = "apples";
if ((str[0] === "a" || str[0] === "A") && str.length > 5)
  console.log("golden string");
else console.log("not a golden string");

// Q5: Largest of 3 numbers.
let a = 5, b = 18, c = 13;
if (a > b) {
  if (a > c) console.log(a, "is largest");
  else console.log(c, "is largest");
} else {
  if (b > c) console.log(b, "is largest");
  else console.log(c, "is largest");
}

// Q6 Bonus: Same last digit?
let num1 = 32, num2 = 47852;
if (num1 % 10 === num2 % 10)
  console.log("Numbers have the same last digit:", num1 % 10);
else console.log("Numbers don't have the same last digit");
