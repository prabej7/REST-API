const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Database
const connect = require("./database/index");
connect();

//Import Routes here
const home = require("./routes/home");
const register = require("./routes/register");
const verify = require("./routes/verify");
const api = require("./routes/api");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/", home);
app.use("/register", register);
app.use("/verify", verify);
app.use("/api", api);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
