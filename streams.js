const fs = require("fs");

/*
   ____                _ 
  |  _ \ ___  __ _  __| |
  | |_) / _ \/ _` |/ _` |
  |  _ <  __/ (_| | (_| |
  |_| \_\___|\__,_|\__,_|
                         
STREAMS
*/

/* const readStreams = fs.createReadStream("./docs/blog3.txt");

// data is a data event
// .on is an event listener
readStreams.on("data", (chunk) => {
    console.log("--> new chunk <--");
    console.log(chunk.toString());
});
 */

//.. can also be encoded with utf8 so we don't call toString method
const readStreams = fs.createReadStream("./docs/blog3.txt", {
    encoding: "utf-8",
});

readStreams.on("data", (chunk) => {
    console.log("--> new chunk <--");
    console.log(chunk);
});

/*
  __        __    _ _       
  \ \      / / __(_) |_ ___ 
   \ \ /\ / / '__| | __/ _ \
    \ V  V /| |  | | ||  __/
     \_/\_/ |_|  |_|\__\___|
                            
STREAMS
*/

/* const readStreams = fs.createReadStream("./docs/blog3.txt", {
    encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

readStreams.on("data", (chunk) => {
    writeStream.write("\n NEW CHUNK\n");
    writeStream.write(chunk);
});
 */

/*
   ____  _       _             
  |  _ \(_)_ __ (_)_ __   __ _ 
  | |_) | | '_ \| | '_ \ / _` |
  |  __/| | |_) | | | | | (_| |
  |_|   |_| .__/|_|_| |_|\__, |
          |_|            |___/ 

*/

const readStreams = fs.createReadStream("./docs/blog3.txt", {
    encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

readStreams.pipe(writeStream); // does the same thing as write a stream which it the better way
