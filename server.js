const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const route = require("./server/routes/router");

const connectDB = require("./server/database/connection");

dotenv.config();

const PORT = process.env.PORT || 8080;

//log requests
app.use(morgan("tiny"));

connectDB();

app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//Load routers
app.use("/", route);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
