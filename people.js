// 1.
const people = ["yoshi", "ryu", "chun-li", "mario"];

//3. export the people array to modules.js
module.exports = people;

// 4. if we want to export multiple variable
const ages = [23, 25, 32, 56];

// 4. allow destructuring-import in the modules.js file.
module.exports = {
    people, // same as people: people
    ages, // same as ages: ages
};
