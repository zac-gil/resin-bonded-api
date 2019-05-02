const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

// API root: /api/v1
routes.router("/api/v1", app);

var server = app.listen(3000, function () {
    console.log("app running on port", server.address().port);
    // Serve static react app ~ Gil
    app.use(express.static('build'));
});
