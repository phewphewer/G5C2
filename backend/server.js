require("dotenv").config();
const express = require("express");

// express app
const app = express();

// Routes
app.get("/", (request, response) => {
  response.json({ mssg: "Server.js response.json" });
});

// listen to port
app.listen(process.env.PORT, () => {
  console.log("Backend Starting . . . On port: ", process.env.PORT);
});

process.env;
