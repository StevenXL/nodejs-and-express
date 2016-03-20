const express = require('express');
const bookRouter = express.Router();

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
    "nav": [
      {"Link": "/Books", "Text": "Books"},
      {"Link": "/Authors", "Text": "Authors"}
    ],
    "books": books
  });
});

bookRouter.route("/:id").get((req, res) => {
  const id = req.params.id

  res.render("bookView", {
    "title": "Hello From EJS Render",
    "nav": [
      {"Link": "/Books", "Text": "Books"},
      {"Link": "/Authors", "Text": "Authors"}
    ],
    "book": books[id]
  });
});

module.exports = bookRouter;