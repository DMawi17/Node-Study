const express = require("express");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
    /* res.write("")
    res.end()
    //.. replace the above 2 methods
    res.send will set header the content type auto.
    also the status code, which is 200 */
    // res.send(`<p>Home Page</p>`);
    res.sendFile("./views/index.html", { root: __dirname });
});

/*
   ____             _   _             
  |  _ \ ___  _   _| |_(_)_ __   __ _ 
  | |_) / _ \| | | | __| | '_ \ / _` |
  |  _ < (_) | |_| | |_| | | | | (_| |
  |_| \_\___/ \__,_|\__|_|_| |_|\__, |
                                |___/ 
AND HTML
*/

app.get("/about", (req, res) => {
    // res.send("<p>About Page</p>");
    res.sendFile("./views/about.html", { root: __dirname });
});

// REDIRECT from /about-us to /about
app.get("/about-us", (req, res) => {
    res.redirect("/about");
});

// 404 PAGE
app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", { root: __dirname });
});
