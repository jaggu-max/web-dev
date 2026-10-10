# let, const and var Keywords

## Differences
- `let`: block-scoped; can be reassigned.
- `const`: block-scoped; cannot be reassigned (but an object/array's contents may still be changed).
- `var`: function-scoped, with older and sometimes confusing behavior; prefer `let` or `const` in modern code.

### Example
```js
let score = 10;
score = 15;

const college = "GMIT";
// college = "Other"; // TypeError: cannot reassign a const

console.log(score, college);
```
