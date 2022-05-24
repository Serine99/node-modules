/**
 * Util
 * The util module supports the needs of Node.js internal APIs. Many of the utilities are useful for application and module developers as well. To access it:
 */
 const util = require('util');

 async function fn() {
    return 'hello world';
  }
  const callbackFunction = util.callbackify(fn);
  
  callbackFunction((err, ret) => {
    if (err) throw err;
    console.log(ret);
  });


//   const debuglog = util.debuglog('foo');

// debuglog('hello from foo [%d]', 123);

const enabled = util.debuglog('foo').enabled;
if (enabled) {
  console.log('hello from foo [%d]', 123);
}

function someFunction () {
    console.log('1st function');
    return 1
}
function someOtherFunction (){
    console.log('2nd function');
    return 2

}

someMessage = 'its interesting';
someOtherMessage = 'its boring';
const fn1 = util.deprecate(someFunction, someMessage, 'DEP0001');
const fn2 = util.deprecate(someOtherFunction, someOtherMessage, 'DEP0002');
fn1(); // Emits a deprecation warning with code DEP0001
fn2(); // Does not emit a deprecation warning because it has the same code


console.log(util.format( '%o', '1', '2', '3'));

const num = util.formatWithOptions({ colors: true }, 'See object %O', { foo: 42 });
console.log(num);
 

const fs = require ('fs')
fs.access('file/that/does/not/exist', (err) => {
    const name = util.getSystemErrorName(err.errno);
    console.error(name);  // ENOENT
  });

  fs.access('file/that/does/not/exist', (err) => {
    const errorMap = util.getSystemErrorMap();
    const name = errorMap.get(err.errno);
    console.error(name);  // [ 'ENOENT', 'no such file or directory' ]
  });


  const EventEmitter = require('events');

function MyStream() {
  EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function(data) {
  this.emit('data', data);
};

const stream = new MyStream();

console.log(stream instanceof EventEmitter); // true
console.log(MyStream.super_ === EventEmitter); // true

stream.on('data', (data) => {
  console.log(`Received data: "${data}"`);
});
stream.write('It works!'); // Received data: "It works!"


const { inspect } = require('util');
const obj = {};
obj.a = [obj];
obj.b = {};
obj.b.inner = obj.b;
obj.b.obj = obj;

console.log(inspect(obj));

