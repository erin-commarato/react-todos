const passport = require("passport");
const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log("err", err);
        return res.status(422).json(err);
      });
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    db.User.findOne({ username: req.params.email })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  login: function(req, res) {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login"
    });
  },

  create: function(req, res, next) {
    // console.log("got to create", req);

    passport.authenticate("register", (err, user, info) => {
      if (err) {
        console.error(err);
      }
      if (info !== undefined) {
        console.error(info.message);
        res.status(403).send(info.message);
      } else {
        // eslint-disable-next-line no-unused-vars
        req.logIn(user, error => {
          console.log(user);
          const data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            username: user.username
          };
          console.log(data);
          User.findOne({
            where: {
              username: data.username
            }
          }).then(user => {
            console.log(user);
            user
              .update({
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email
              })
              .then(() => {
                console.log("user created in db");
                res.status(200).send({ message: "user created" });
              });
          });
        });
      }
    });
    // db.User.create(req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
