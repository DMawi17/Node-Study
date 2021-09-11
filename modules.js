// 1. node modules.js will execute people.js file because of the require.
const xyz = require("./people");

// 2. return an empty object
console.log(xyz);

// 3. now xyz is people array
console.log(xyz); // => [ 'yoshi', 'ryu', 'chun-li', 'mario' ]

// 4. destructuring-import is now allowed
const { people, ages } = require("./people");
console.log(people, ages);
