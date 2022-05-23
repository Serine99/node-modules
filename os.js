/** OS
 * The os module provides operating system-related utility methods and properties.
 */

 const os = require('os');
 console.log(os.arch()); // Returns the operating system CPU architecture for which the Node.js binary was compiled
 console.log(os.EOL); // The operating system-specific end-of-line marker.in windows (\r\n)
//console.log(os.constants); //Contains commonly used operating system-specific constants for error codes, process signals, and so on
// console.log(os.cpus()); // returns an array of objects,containing  information about each logical CPU core.
console.log(os.devNull); // The platform-specific file path of the null device
console.log(os.endianness()); //Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled. 'LE' for little endian
console.log(os.freemem()); //Returns the amount of free system memory in bytes as an integer.
console.log(os.getPriority()); //Returns the scheduling priority for the process specified by pid. If pid is not provided or is 0, the priority of the current process is returned.
console.log(os.homedir()); //Returns the string path of the current user's home directory. // C:\Users\Mega 
console.log(os.hostname()); //Returns the host name of the operating system as a string.
console.log(os.loadavg()); //Returns an array containing the 1, 5, and 15 minute load averages.
// console.log(os.networkInterfaces()); //Returns: <Object> , Returns an object containing network interfaces that have been assigned a network address.
console.log(os.platform());//Returns a string identifying the operating system platform for which the Node.js binary was compiled // win32
console.log(os.release()); //Returns the operating system as a string.
// console.log(os.setPriority([pid, ]priority)); //pid <integer> The process ID to set scheduling priority for. Default: 0., priority <integer> The scheduling priority to assign to the process.
console.log(os.tmpdir()); //Returns the operating system's default directory for temporary files as a string. //C:\Users\Mega\AppData\Local\Temp
console.log(os.totalmem()); // Returns the total amount of system memory in bytes as an integer.
console.log(os.type()); //Returns the operating system name as returned by uname(3)
console.log(os.uptime()); //Returns the system uptime in number of seconds.
console.log(os.userInfo([])); //Returns: <Object>, Returns information about the currently effective user
console.log(os.version()); //Returns a string identifying the kernel version.