/** Console
 * The console module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.

The module exports two specific components:

A Console class with methods such as console.log(), console.error() and console.warn() that can be used to write to any Node.js stream.
A global console instance configured to write to process.stdout and process.stderr. The global console can be used without calling require('console').
 * 
 */

//Example using the global console:
// console.log('hello world'); // hello world
// console.log('hello %s', 'world');
// console.error(new Error('Whoops, something bad happened'));
// const anyone = 'Serine Sardaryan';
// console.warn(`Danger ${anyone}! Danger!`);

// Example using the Console class:
const { Console, time } = require('console');
// const out = getStreamSomehow();
// // console.log(out); //ReferenceError: getStreamSomehow is not defined
// const err = getStreamSomehow();
// const myConsole = new console.Console(out, err);
// myConsole.log('hello world');
// myConsole.error(new Error('Whoops, something bad happened'));

console.log(Console); //[Function: Console]
console.log (console.assert()); //Assertion failed
console.assert(true, 'does nothing'); //undefined
console.log(console.assert(true, 'does nothing')); //undefined
console.assert(false, 'Whoops did not work'); // Assertion failed: Whoops didn't work//console.assert() writes a message if value is falsy or omitted. It only writes a message and does not otherwise affect execution. The output always starts with "Assertion failed". 
// console.log(console.assert(false, 'Whoops did not work'));
console.assert(); //Assertion failed
// console.clear(); //clear the output in the current terminal
console.count(['default']);// default: 1
console.count(['default']);// default: 2
console.count(['default']);// default: 3
console.count(); // default: 4
console.count('Serine');
console.count('Serine');
console.countReset();
console.count();// default: 1
console.debug(Console); //The console.debug() function is an alias for console.log().
console.dir(true); //boolean: yellow
console.dir(false);//boolean: yellow
console.dir();//undefined: grey
console.dir(null); //null: bold
console.dir(23);//number: yellow
console.dir('23'); //string: green
console.log('23');
console.dirxml(...[1,2,3] , '12365'); //1 2 3 12365 //This method calls console.log() passing it the arguments received
console.log(...[1,2,3] , '12365'); //1 2 3 12365
console.log("12365"); //1 2 3 12365
console.error();
console.groupEnd({1:2, 2:3});
const code = 5;
console.error(`error ${code}`); //error 5
console.error('error ', code); //error  5
console.error('error #%d', code); //error #5
console.group([1,3,5], code); //[ 1, 3, 5 ] 5
console.log([1,3,5], code); //[ 1, 3, 5 ] 5
console.groupEnd({1:2, 2:3}); //Decreases indentation of subsequent lines by spaces for groupIndentation length.
console.log({1:2, 2:3});
console.info()// The console.info() function is an alias for console.log().
console.table();
console.table(Symbol());
console.table([{ a: 1, b: 'Y' , c: 'S'}, { a: 'Z', b: 2 , c: 'S'}, { a: 'Z', b: 2, c: 'S' }]);
console.time('default');
console.timeEnd();
console.time('bunch-of-stuff');
console.timeEnd('bunch-of-stuff');
console.time('process');
function expensiveProcess1(){
    return 42;
};
const value = expensiveProcess1(); // Returns 42
console.timeLog('process', value);// process: 0.087ms 42
console.timeEnd('process'); //process: 0.272ms
// console.trace('Show me');
console.warn(); // The console.warn() function is an alias for console.error().
console.profile('MyLabel'); //This method does not display anything unless used in the inspector. The console.profile() method starts a JavaScript CPU profile with an optional label until console.profileEnd() is called. The profile is then added to the Profile panel of the inspector.
console.profileEnd('MyLabel');
console.timeStamp(); //This method does not display anything unless used in the inspector. The console.timeStamp() method adds an event with the label 'label' to the Timeline panel of the inspector.
