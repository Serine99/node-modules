
/** Errors
 * Applications running in Node.js will generally experience four categories of errors:
 * Standard JavaScript
 * System errors
 * User-specified errors
 * AssertionErrors are a special class of error that can be triggered when Node.js detects an exceptional logic violation that should never occur.
 */

 const fs = require('fs');
 fs.readFile('a file that does not exist', (err, data) => {
   if (err) {
     console.error('There was an error reading the file!', err);
     return;
   }
   // Otherwise handle the data
 });

 const net = require('net');
const connection = net.connect('localhost');

// Adding an 'error' event handler to a stream:
connection.on('error', (err) => {
  // If the connection is reset by the server, or if it can't
  // connect at all, or on any sort of error encountered by
  // the connection, the error will be sent here.
  console.error(err);
});

connection.pipe(process.stdout);

function errorFirstCallback(err, data) {
    if (err) {
      console.error('There was an error', err);
      return;
    }
    console.log(data);
  }
  
  fs.readFile('/some/file/that/does-not-exist', errorFirstCallback);
  fs.readFile('/some/file/that/does-exist', errorFirstCallback);

const err =new Error ('something new')
console.log(err); //Error: something new.....
console.log(err.code); //undefined
console.log(err.message); //something new
console.log(err.stack);

// const err = new RangeError ();

// const myObject = {};
// Error.captureStackTrace(myObject);
// console.log(myObject.stack);  // Similar to `new Error().stack`




// try {
//     help // variable is not defined
// } catch (err){
//     console.log(err.name); // ReferenceError
//     console.log(err.message); // help is not defined
//     console.log(err.stack); //ReferenceError: help is not defined
//     console.log(err); //ReferenceError: help is not defined
// }

// let json = '{"name":"John", "age": 30}'; // data from the server

// let user = JSON.parse(json); // convert the text representation to JS object
// console.log(user); //{name: 'John', age: 30}
// console.log( user.name ); // John
// console.log( user.age );  // 30

// let json1 = "{ bad json }";

// try {

//   let user1 = JSON.parse(json1); // <-- when an error occurs...
//   console.log( user1.name ); // doesn't work

// } catch (err) {
//   console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
//   console.log( err.name ); //SyntaxError
//   console.log( err.message ); //Unexpected token b in JSON at position 2
//   console.log(err.stack);
// }