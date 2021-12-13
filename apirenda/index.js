const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API kukac" });
});

require("./src/routes/DataRoutes")(app);

app.listen(process.env.PORT || 3100, () => {
  console.log("Server running in port 3100");
});
