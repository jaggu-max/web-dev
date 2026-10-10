# NaN in JavaScript

## What is NaN?
`NaN` means “Not a Number.” It commonly appears when a numeric operation fails to produce a valid number.

### Example
```js
let answer = Number("hello");
console.log(answer); // NaN
console.log(Number.isNaN(answer)); // true
```

**Tip:** Use `Number.isNaN(value)` to check for `NaN`.
