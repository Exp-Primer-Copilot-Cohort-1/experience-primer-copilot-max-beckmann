//Create web server
const express = require("express");
const app = express();
const port = 4001;

//Middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//Load database
const db = require("./db");

//Load models
const Comment = require("./models/Comment");
const User = require("./models/User");

//Load routes
const commentRoutes = require("./routes/comment");
const userRoutes = require("./routes/user");

//Use routes
app.use("/comment", commentRoutes);
app.use("/user", userRoutes);

//Start server
app.listen(port, () => console.log(`Server listening on port ${port}`));