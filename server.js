const http = require("http");
const fs = require("fs");

/*

   ____  _        _             
  / ___|| |_ __ _| |_ _   _ ___ 
  \___ \| __/ _` | __| | | / __|
   ___) | || (_| | |_| |_| \__ \
  |____/ \__\__,_|\__|\__,_|___/
CODES AND REDIRECTS
*/

/*
 * 100 Range - informational responses
 * 200 Range - success codes
 * 300 Range - codes for redirects
 * 400 Range - user or client error codes
 * 500 Range - server error codes
 */

const server = http.createServer((req, res) => {
    // set header content type
    res.setHeader("Content-Type", "text/html");

    let path = "./views/";

    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200; // *
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200; // *
            break;
        // ==> REDIRECT <== //
        case "/about-me":
            res.statusCode = 301; // *
            res.setHeader("Location", "/about"); // redirecting to /about
            res.end();
            break;
        //...
        default:
            path += "404.html";
            res.statusCode = 404; // in dev-tools > network tab check status!
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
