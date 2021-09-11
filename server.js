const http = require("http");
const fs = require("fs");

/*
RESPONDING WITH
   ____ _____ ____  
  / ___|_   _|  _ \ 
  \___ \ | | | |_) |
   ___) || | |  _ < 
  |____/ |_| |_| \_\                    
*/

/* const server = http.createServer((req, res) => {
    // console.log(req); // vomits the entire objects
    console.log(req.url); // `/` if on home page or `/about` if on about page
    console.log(req.method); // GET

    // set header content type
    res.setHeader("Content-Type", "text/html");

    res.write(`<head><link res="stylesheet" href="#"></head>`); // its in head
    res.write("<p>Hello, ninja</p>");
    res.write("<p>Hello, 2nd ninja</p>");
    res.end(); // we can also write inside an end
});

server.listen(3000, "localhost", () => {
    console.log("listening for request on port 3000");
}); */

/*
RESPONDING WITH
   _   _ _____ __  __ _     
  | | | |_   _|  \/  | |    
  | |_| | | | | |\/| | |    
  |  _  | | | | |  | | |___ 
  |_| |_| |_| |_|  |_|_____|
FILE                           
*/

const server = http.createServer((req, res) => {
    console.log(req.url); // `/` if on home page or `/about` if on about page
    console.log(req.method); // GET

    // set header content type
    res.setHeader("Content-Type", "text/html");

    // send an html file
    fs.readFile("./views/index.html", (err, data) => {
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
