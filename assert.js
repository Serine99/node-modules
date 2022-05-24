/** Assert
 * The assert module provides a set of assertion functions for verifying invariants.
 * In strict assertion mode, non-strict methods behave like their corresponding strict methods. For example, assert.deepEqual() will behave like assert.deepStrictEqual().
 * In strict assertion mode, error messages for objects display a diff. In legacy assertion mode, error messages for objects display the objects, often truncated.
 */

const assert = require ('assert/strict')

// await assert.doesNotReject(
//   async () => {
//     throw new TypeError('Wrong value');
//   },
//   SyntaxError
// );

// console.log(assert);
// const deepEqual =  assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
// console.log(deepEqual);
// const deepEqual1 = assert.deepEqual(/a/gi, new Date());
// console.log(deepEqual1);

/* Class: assert.AssertionError ---> Indicates the failure of an assertion. All errors thrown by the assert module will be instances of the AssertionError class.*/

// import assert from 'assert';

// Generate an AssertionError to compare the error message later:
const { message } = new assert.AssertionError({
  actual: 1,
  expected: 2,
  operator: 'strictEqual'
});

// Verify error output:
try {
  assert.strictEqual(1, 2);
} catch (err) {
  assert(err instanceof assert.AssertionError);
  assert.strictEqual(err.message, message);
  assert.strictEqual(err.name, 'AssertionError');
  assert.strictEqual(err.actual, 1);
  assert.strictEqual(err.expected, 2);
  assert.strictEqual(err.code, 'ERR_ASSERTION');
  assert.strictEqual(err.operator, 'strictEqual');
  assert.strictEqual(err.generatedMessage, true);
}

console.log({ message });

// const tracker = new assert.CallTracker();

// function func() {}

// function foo() {}

// // Returns a function that wraps func() that must be called exact times
// // before tracker.verify().
// const callsfunc = tracker.calls(func, 2);

// // Returns an array containing information on callsfunc()
// tracker.report();
// console.log(tracker.report());