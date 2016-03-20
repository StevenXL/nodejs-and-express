const express = require("express");

var nav = [{"Link": "/Books","Text": "Book"}, {"Link": "/Authors", "Text": "Author"}];
var bookRouter = require("./src/routes/bookRoutes")(nav);


const app = express();
const port = 5000;

app.use(express.static("public"));
app.set("views", "./src/views");

app.set("view engine", "ejs");


app.use("/Books", bookRouter);

app.get("/", (req, res) => {
  res.render("index", {
    "title": "Hello From EJS Render",
    "nav": [
      {"Link": "/Books", "Text": "Books"},
      {"Link": "/Authors", "Text": "Authors"}
    ]
  });
});

app.listen(port, (err) => {
  console.log(`running server on port: ${port}`);
});
