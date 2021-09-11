const { people, ages } = require("./people");

console.log(people, ages); // => without module.exports xyz is = an empty object {}

// without module.exports, people doesn't work!!!
console.log(people);
