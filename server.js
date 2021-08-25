const express = require("express");
const path = require("path");
const routes = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(routes);
app.get("/", (req, res) => res.send("Hello there"));

sequelize
  .sync({ force: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
  );
