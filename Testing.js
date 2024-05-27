
// May 27 Class notes

// Declare Function
const assert = require('assert');

// eslint-disable-next-line func-style
function sayHello() {
  return 'hello there!';
}

// Calling Function
const hello = sayHello();
console.log(hello);

// Manual teting
// console.assert (value to compare, message in case if falsy)
// console.assert(true === true, 'is true!');
// console.assert(true === false, 'not equal');
// console.assert(sayHello() === 'hello there', 'not equal');

// Using node:assert, assert.equal(actual, expected)
assert.equal(1, 1);
// assert.equal(1, 2);
assert.strictEqual(1, '1');

