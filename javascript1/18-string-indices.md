# String Indices

## Accessing characters
String indexing starts at `0`. Use square brackets or `charAt()` to read a character.

### Example
```js
let word = "JavaScript";
console.log(word[0]); // J
console.log(word[4]); // S
console.log(word.charAt(1)); // a
console.log(word.length); // 10
```

Strings are immutable: you cannot change one character directly in the original string.
