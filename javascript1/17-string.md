# Strings in JavaScript

## What is a string?
A string is text written inside single quotes, double quotes, or backticks.

### Example
```js
let firstName = "Jagadeesh";
let greeting = `Hello, ${firstName}!`;
console.log(greeting);
console.log(firstName.length); // number of UTF-16 code units
```

Backticks create template literals, which support interpolation with `${...}`.
