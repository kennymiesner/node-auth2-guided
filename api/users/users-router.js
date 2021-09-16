const router = require("express").Router();
const checkRole = require('../auth/check-role-middleware')
const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, checkRole('user'), (req, res, next) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(next); // our custom err handling middleware in server.js will trap this
});

module.exports = router;
