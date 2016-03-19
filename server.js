var express = require('express');

const app = express();
const port = 5000;

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade');

app.get("/", (req, res) => {
  res.render("index", {list: ["Steven", "Ada", "Charles"]});
});

app.get("/books", (req, res) => {
  res.send("Hello Books!");
});

app.listen(port, (err) => {
  console.log(`running server on port: ${port}`);
});


