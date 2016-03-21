const express = require("express");
const bodyParser = require("body-parser");

const nav = [{"Link": "/Books","Text": "Books"}, {"Link": "/Authors", "Text": "Authors"}];
const bookRouter = require("./src/routes/bookRoutes")(nav);
const adminRouter = require("./src/routes/adminRoutes")(nav);
const authRouter = require("./src/routes/authRoutes")(nav);

const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": true}));
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/Books", bookRouter);
app.use("/Admin", adminRouter);
app.use("/Auth", authRouter);

app.get("/", (req, res) => {
  res.render("index", {"nav": nav});
});

app.listen(port, (err) => {
  console.log(`running server on port: ${port}`);
});
