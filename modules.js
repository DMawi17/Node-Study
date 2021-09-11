const { people, ages } = require("./people");

console.log(people, ages); // => without module.exports xyz is = an empty object {}

// without module.exports, people doesn't work!!!
// console.log(people);

//... with module.exports xyz is = 'hello'
// console.log(xyz); // => empty object {}

const os = require("os");

console.log(os);
