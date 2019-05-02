const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.router(app);

var server = app.listen(3000, function () {
    console.log("app running on port", server.address().port);
    // Serve static react app ~ Gil
    app.use(express.static('build'));
});
