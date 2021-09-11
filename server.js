const http = require("http");
const fs = require("fs");

/*
A SIMPLE
   ____             _   _             
  |  _ \ ___  _   _| |_(_)_ __   __ _ 
  | |_) / _ \| | | | __| | '_ \ / _` |
  |  _ < (_) | |_| | |_| | | | | (_| |
  |_| \_\___/ \__,_|\__|_|_| |_|\__, |
                                |___/ 
SYSTEM
*/

const server = http.createServer((req, res) => {
    // set header content type
    res.setHeader("Content-Type", "text/html");

    let path = "./views/";

    switch (req.url) {
        case "/":
            path += "index.html";
            break;
        case "/about":
            path += "about.html";
            break;
        default:
            path += "404.html";
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, "localhost", () => {
    console.log("listening for request on port 3000");
});
