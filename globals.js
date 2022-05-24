
/**
 * Global objects#
These objects are available in all modules. The following variables may appear to be global but are not. They exist only in the scope of modules, see the module system documentation:

__dirname
__filename
exports
module
require()
The objects listed here are specific to Node.js. There are built-in objects that are part of the JavaScript language itself, which are also globally accessible.
 */

const ac = new AbortController();

ac.signal.addEventListener('abort', () => console.log('Aborted!'),
 { once: true });

ac.abort();

console.log(ac.signal.aborted);  // True
console.log(ac.abort());  // undefined
console.log(ac); //AbortController { signal: AbortSignal { aborted: true } }
console.log(AbortController.signal);
// const k = AbortController.abort();
// console.log(k);

const ac1 = new AbortController();
ac1.signal.onabort = () => console.log('aborted!');
ac1.signal.addEventListener('abort', (event) => {
  console.log(event.type);  // Prints 'abort'
}, { once: true });

ac1.abort();