require("dotenv").config();

const requireAuth = require("./middleware/requireAuth");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const adminRoutes = require("./routes/admin");
const commentRoutes = require("./routes/comments");
const likeRoutes = require("./routes/like");
const poll = require("./routes/poll");
const app = express();

app.use(cors());
// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// routes
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/comments", requireAuth, commentRoutes);
app.use("/api/like", requireAuth, likeRoutes);
app.use("/api", poll);
// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log(
        "connected to DATABASE & listening on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
