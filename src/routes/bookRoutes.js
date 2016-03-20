const express = require("express");
const bookRouter = express.Router();
const db = require("../db/database");

const router = function(nav) {

  bookRouter.route("/").get((req, res) => {
    db.query("select * from books")
      .then((books) => {
        res.render("bookListView", {
          "title": "Hello From EJS Render",
          "nav": nav,
          "books": books
        });
      });
    });

  bookRouter.route("/:id")
    .all((req, res, next) => {
      db
        .one("select * from books where id = $1", req.params.id)
        .then((book) => {
          req.book = book;
          next();
        })
        .catch((err) => {
          res.status(404).send("Cannot Find.");
        });
      })
    .get((req, res) => {
      res.render("bookView", {
        "title": "Hello from EJS Render",
        "nav": nav,
        "book": req.book
      });
    });

  return bookRouter;
};

module.exports = router;
