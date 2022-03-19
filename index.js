import express from "express";

import estoqueController from "./controllers/estoque-controller.js";

import generalMiddleware from "./middleware/general-middleware.js";

import bd from "./database/bd.js";

const app = express();
const port = 3000;

app.use(express.json());

generalMiddleware(app);

estoqueController(app);

estoqueController(app, bd);

app.listen(port, () => {
  console.log(`Abrindo a porta no servidor http://localhost:${port}/`);
});
