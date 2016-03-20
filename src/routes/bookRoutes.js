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

  bookRouter.route("/:id").get((req, res) => {
    db.one("select * from books where id = $1", req.params.id)
      .then((book) => {
        res.render("bookView", {
          "title": "Hello from EJS Render",
          "nav": nav,
          "book": book
        });
      });
  });

  return bookRouter;
};

module.exports = router;
