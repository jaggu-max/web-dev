// Falsy: false, 0, -0, 0n, "", null, undefined, NaN.
// Everything else is truthy, including "0", "false", [], and {}.
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean("hello")); // true
console.log(Boolean("0"));     // true
console.log(Boolean([]));      // true
console.log(Boolean(null));    // false
