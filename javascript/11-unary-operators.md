# Unary Operators

## What is a unary operator?
A unary operator works with one operand. Examples include increment (`++`), decrement (`--`), unary plus (`+`), unary minus (`-`), and logical NOT (`!`).

### Example
```js
let age = 20;
age++; // increment: age becomes 21
console.log(age);
age--; // decrement: age becomes 20
console.log(age);

console.log(-5);       // -5
console.log(!true);    // false
console.log(+("12"));  // 12 (converts to number)
```

**Note:** `age++` and `++age` differ when the expression's value is used; both increase `age` by one.
