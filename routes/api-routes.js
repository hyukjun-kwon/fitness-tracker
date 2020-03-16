const db = require("../models");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout
      .find({})
      .then(results => res.json(results))
      .catch(err => res.json(err));
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout
      .findByIdAndUpdate({ _id: req.params.id },
      { $push: 
        { exercises: req.body } 
      })
      .then(results => res.json(results))
      .catch(err => res.json(err));
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout
      .create(req.body)
      .then(results => res.json(results))
      .catch(err => res.json(err));
  });
};
