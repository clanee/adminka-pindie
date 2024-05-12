const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const PORT = 3000;

const mainRoute = require("./routes/main");
const gamesRoute = require("./routes/games");
const cors = require("./middlewares/cors");

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  mainRoute,
  gamesRoute
);

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
