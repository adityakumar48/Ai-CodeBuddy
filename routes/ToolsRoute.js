const Router = require("express").Router();
require("../config/OpenAIConfig");
const {
  createArticleTool,
  checkTimeComplexity,
  CheckErrors,
} = require("../controllers/ToolsController");

// Article POST Route
Router.post("/article", createArticleTool);
Router.post("/time-complexity", checkTimeComplexity);
Router.post("/CheckErrors", CheckErrors);

module.exports = Router;
