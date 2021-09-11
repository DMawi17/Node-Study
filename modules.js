const fs = require("fs");

/*
   ____                _ _              
  |  _ \ ___  __ _  __| (_)_ __   __ _  
  | |_) / _ \/ _` |/ _` | | '_ \ / _` | 
  |  _ <  __/ (_| | (_| | | | | | (_| | 
  |_| \_\___|\__,_|\__,_|_|_| |_|\__, | 
                                 |___/  
files
*/

/* fs.readFile("./docs/blog1.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
    console.log(data.toString());
});

console.log("last line"); // executed first since async 

/*
  __        __    _ _   _              
  \ \      / / __(_) |_(_)_ __   __ _  
   \ \ /\ / / '__| | __| | '_ \ / _` | 
    \ V  V /| |  | | |_| | | | | (_| | 
     \_/\_/ |_|  |_|\__|_|_| |_|\__, | 
                                |___/  
files
*/

/* fs.writeFile("./docs/blog2.txt", "hello, ninja world", () => {
    console.log("file was written");
}); */

/*
   ____  _               _             _           
  |  _ \(_)_ __ ___  ___| |_ ___  _ __(_) ___  ___ 
  | | | | | '__/ _ \/ __| __/ _ \| '__| |/ _ \/ __|
  | |_| | | | |  __/ (__| || (_) | |  | |  __/\__ \
  |____/|_|_|  \___|\___|\__\___/|_|  |_|\___||___/
                                                   
*/

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

/*
   ____       _      _        
  |  _ \  ___| | ___| |_ ___  
  | | | |/ _ \ |/ _ \ __/ _ \ 
  | |_| |  __/ |  __/ ||  __/ 
  |____/ \___|_|\___|\__\___| 
                              
files
*/

/* if (fs.existsSync("./docs/deleteme.txt")) {
    fs.unlink("./docs/deleteme.txt", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("file deleted");
    });
} */
