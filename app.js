const express = require("express");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
    /* res.write("")
    res.end()
    //.. replace the above 2 methods
    res.send will set header the content type auto.
    also the status code, which is 200 */
    res.send(`<p>Home Page</p>`);
});
