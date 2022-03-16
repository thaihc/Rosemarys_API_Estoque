import express from "express";

import estoqueController from "./controllers/estoque-controller.js";

const app = express();
const port = 3000;

estoqueController(app);

app.listen(port, () => {
  console.log(`Abrindo a porta no servidor http://localhost:${port}/`);
});
