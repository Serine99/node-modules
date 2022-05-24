/**Path
 * 
 * The path module provides utilities for working with file and directory paths. It can be accessed using:
 */
 const path = require('path');
 console.log(path.dirname('c/Users/Mega/Desktop/node-modules')); //c/Users/Mega/Desktop
console.log(path.basename('c/Users/Mega/Desktop/node-modules')); // node-modules
console.log(path.delimiter); //; for Windows
// console.log(process.env.PATH)
// const ll = process.env.PATH.split(path.delimiter);
// console.log(ll);
console.log(path.extname('c/Users/Mega/Desktop/node-modules/path.js')); // .js
console.log(path.format({dir: '/Users/Mega/Desktop/node-modules', root:':c', base: 'path.js'})); ///Users/Mega/Desktop/node-modules\path.js , root is ignored
console.log(path.format({ root:':c', base: 'path.js'})); //:cpath.js //root` will be used if `dir` is not specified.
console.log(path.isAbsolute('c/Users/Mega/Desktop/node-modules/path.js')); // false
console.log(path.isAbsolute('//c')); // true
console.log(path.isAbsolute('//c/Users')); // true
console.log(path.isAbsolute('//c/Users/Mega')); // true
console.log(path.isAbsolute('//c/Users/Mega/Desktop')); // true
console.log(path.isAbsolute('/c/Users/Mega/Desktop/node-modules')); // true
console.log(path.isAbsolute('//Users/Mega')); // true
console.log(path.isAbsolute('Users/Mega')); // false
console.log(path.join('mega', 'desktop', 'path.js')); //mega\desktop\path.js
//A TypeError is thrown if any of the path segments is not a string.
console.log(path.normalize('c/Users//./Mega\/Desktop/node-modules/path.js')); //c\Users\Mega\Desktop\node-modules\path.js
console.log(path.parse('c/Users/Mega/Desktop/node-modules/path.js')); //{ root: '',dir: 'c/Users/Mega/Desktop/node-modules', base: 'path.js',ext: '.js',name: 'path'}
console.log(path.sep); //  \ on Windows
console.log(path.toNamespacedPath('c/Users/Mega/Desktop/node-modules/path.js'));