import express from "express";

import estoqueController from "./controllers/estoque-controller.js";

import generalMiddleware from "./middleware/general-middleware.js";
import estoqueMiddleware from "./middleware/estoque-middleware.js";

const app = express();
const port = 3000;

app.use(express.json());

generalMiddleware(app);
estoqueMiddleware(app);

estoqueController(app);

app.listen(port, () => {
  console.log(`Abrindo a porta no servidor http://localhost:${port}/`);
});
