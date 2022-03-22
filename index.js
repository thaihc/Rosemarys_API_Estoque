import express from "express";

import estoqueController from "./src/controllers/estoque-controller.js";

import generalMiddleware from "./src/middleware/general-middleware.js";

import database from "./src/database/db-sqlite.js";

const app = express();
const port = 3000;

app.use(express.json());

generalMiddleware(app);

estoqueController(app, database);

app.listen(port, () => {
  console.log(`Abrindo a porta no servidor http://localhost:${port}/`);
});
