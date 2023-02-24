const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 8000;

// MiddleWares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/tools", require("./routes/ToolsRoute"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
