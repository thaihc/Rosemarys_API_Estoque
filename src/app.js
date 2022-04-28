import express from "express";

import estoqueController from "./controllers/estoque-controller.js";


import database from "./database/db-sqlite.js";

const app = express();
const port = 3001 || process.env.PORT;

app.use(express.json());

estoqueController(app, database);

app.listen(port, () => {
  console.log(`Abrindo a porta no servidor http://localhost:${port}/`);
});
