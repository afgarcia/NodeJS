const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log(os.hostname());

console.log('La memoria libre es: ' + os.freemem());
console.log('La memoria total es: ' + os.totalmem());