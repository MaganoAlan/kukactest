module.exports = (app) => {
  const dataController = require("../controllers/DataController");

  app.post("/enviar", dataController.enviar);
};
