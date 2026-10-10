# null and undefined in JavaScript

## Difference
- `undefined`: a value is missing or has not been assigned.
- `null`: an intentional empty value.

### Example
```js
let notAssigned;
let emptyValue = null;

console.log(notAssigned); // undefined
console.log(emptyValue);  // null
console.log(notAssigned == emptyValue);  // true (loose equality)
console.log(notAssigned === emptyValue); // false (strict equality)
```

Prefer `===` when you want to compare both value and type.
