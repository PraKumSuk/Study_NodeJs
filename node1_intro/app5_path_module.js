const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory : ' + totalMemory);
console.log('Free Memory : ' + freeMemory);

//Pre defined Template String from ECMA
//ES6 / ES2015 : ECMAScript 6
//ECMAScript normally adds templates to JS library regularly
//So easy way to bind dynamic variables
console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)