var appRouter = function(app) {

  app.get("/", function(req, res) {
    res.status(200).send("Welcome to the restful API");
  });

};

module.exports = {
  router: appRouter
}
