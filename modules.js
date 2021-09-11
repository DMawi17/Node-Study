// const { people, ages } = require("./people");

// console.log(people, ages); // => without module.exports xyz is = an empty object {}

// without module.exports, people doesn't work!!!
// console.log(people);

//... with module.exports xyz is = 'hello'
// console.log(xyz); // => empty object {}

/*
    ___  ____  
   / _ \/ ___| 
  | | | \___ \ 
  | |_| |___) |
   \___/|____/ 

*/

const os = require("os");
// console.log(os.platform(), os.homedir());

/*
   _____ ____  
  |  ___/ ___| 
  | |_  \___ \ 
  |  _|  ___) |
  |_|   |____/ 

*/

const fs = require("fs");

// Reading files
/* fs.readFile("./docs/blog1.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
    console.log(data.toString());
});

console.log("last line"); // executed first since async */

// Writing files
/* fs.writeFile("./docs/blog2.txt", "hello, ninja world", () => {
    console.log("file was written");
}); */

// Directories
/* fs.mkdir("./docs/assets", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("folder created");
});
 */
// If exists
/* if (!fs.existsSync("./assets")) { // if it doesn't exist mkdir
    fs.mkdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("folder created");
    });
} else {  // if exist rmdir the folder
    fs.rmdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("folder deleted");
    });
} */

// Delete files
/* if (fs.existsSync("./docs/deleteme.txt")) {
    fs.unlink("./docs/deleteme.txt", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("file deleted");
    });
} */
