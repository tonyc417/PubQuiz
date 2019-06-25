var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/admin", function(req, res) {
    db.Team.findAll({}).then(function(data) {
      var teams = {
        teams: data
      };
      res.render("admin", teams);
    });
  });

  app.get("/quiz/:id", function(req, res) {
    db.Team.findAll({ where: { id: req.params.id } }).then(function(data) {
      var team = {
        teamName: data[0].teamName,
        score: data[0].score
      };
      res.render("quiz", team);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
