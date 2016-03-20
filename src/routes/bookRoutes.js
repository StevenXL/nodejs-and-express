const express = require('express');
const bookRouter = express.Router();

var router = function(nav) {
  const books = [
    {
      "title": "War and Peace",
      "genre": "Historical Fiction",
      "author": "Lev Nikolayevich Tolstoy",
      "read": false
    }, {
      "title": "Les Miserables",
      "genre": "Historical Fiction",
      "author": "Victor Hugo",
      "read": false
    }
  ];

  bookRouter.route("/").get((req, res) => {
    res.render("bookListView", {
      "title": "Hello From EJS Render",
      "nav": nav,
      "books": books
    });
  });

  bookRouter.route("/:id").get((req, res) => {
    const id = req.params.id

    res.render("bookView", {
      "title": "Hello From EJS Render",
      "nav": nav,
      "book": books[id]
    });
  });

  return bookRouter;
};

module.exports = router;
