# Data Types in JavaScript

## Common data types
- **String:** text, such as `"Hello"`
- **Number:** integers and decimals, such as `10` and `3.14`
- **Boolean:** `true` or `false`
- **Undefined:** a declared variable without an assigned value
- **Null:** an intentional absence of a value
- **BigInt:** very large integers, such as `123n`
- **Symbol:** a unique identifier
- **Object:** collections of data; arrays and functions are also objects/functions in JavaScript's type system.

### Example
```js
let student = "Ravi";     // string
let marks = 85;           // number
let passed = true;        // boolean
let result;               // undefined
let selected = null;      // null

console.log(typeof student);
console.log(typeof marks);
console.log(typeof passed);
console.log(typeof result);
console.log(typeof selected); // "object" — a historical JavaScript quirk
```
