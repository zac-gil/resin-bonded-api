const mongodb = require("mongodb")
const mongodbClient = mongodb.MongoClient

const jsonManager = require("../functions/forms.js")

var appRouter = function(app) {

  // app.get("/", function(req, res) {
  //   res.status(200).send("Welcome to the restful API");
  // });

  

  app.get("/database", function(req, res) {
    mongodbClient.connect("mongodb://localhost:3000/YourDB", {
       useNewUrlParser: true
     })
  });

  app.get("/form/:id", function(req, res) {
    var id = req.params.id

    if (jsonManager.checkFileExists(id, "json")) {
      var formJSON = jsonManager.readJsonFile(id, "json")
      res.status(200).send(formJSON)
    } else {
      var json = {
        result: "File not found"
      }
      
      res.status(404).send(json)
    }
  });

  app.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next route
    if (req.params.id === '0') {
       next('route')
    }
    // otherwise pass the control to the next middleware function in this stack
    else {
      next()
    }
  }, function (req, res, next) {
    // send a regular response
    res.send('regular')
  });

  // handler for the /user/:id path, which sends a special response
  app.get('/user/:id', function (req, res, next) {
    res.send('special')
  });

};

function getForm(req) {

};

module.exports = {
  router: appRouter
}
