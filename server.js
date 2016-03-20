const express = require("express");
const handlebars = require("express-handlebars");

const app = express();
const port = 5000;

app.use(express.static("public"));
app.set("views", "./src/views");

app.engine(".hbs", handlebars({"extname": ".hbs"}));
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  res.render("index", {"title": "Hello From Render", "list": ["Ada", "Steven", "Charles"]});
});

app.get("/books", (req, res) => {
  res.send("Hello Books!");
});

app.listen(port, (err) => {
  console.log(`running server on port: ${port}`);
});


