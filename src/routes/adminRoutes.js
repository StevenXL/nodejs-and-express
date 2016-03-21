const express = require("express");
const adminRouter = express.Router();
const db = require("../db/database");

const router = function(_nav) {

  adminRouter.route("/newBook")
    .get((req, res) => {
      res.render("newBook");
    });

  adminRouter.route("/addBook")
    .post((req, res) => {
      db.one("insert into books (title, author, genre) values ($1, $2, $3) returning id",
             [req.body.title, req.body.author, req.body.genre])
        .then((data) => {
          res.redirect("/Books/" + data.id);
        })
        .catch((err) => {
          res.send("Cannot Insert Data");
        });
    });

  return adminRouter;
};

module.exports = router;
