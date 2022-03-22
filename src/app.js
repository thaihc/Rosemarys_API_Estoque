import express from "express";

import estoqueController from "./controllers/estoque-controller.js";

import generalMiddleware from "./middleware/general-middleware.js";

import database from "./database/db-sqlite.js";

const app = express();
const port = 3000;

app.use(express.json());

generalMiddleware(app);

estoqueController(app, database);

app.listen(port, () => {
  console.log(`Abrindo a porta no servidor http://localhost:${port}/`);
});
