import Estoque from "../models/estoque.js";

const estoqueController = (app, bd) => {
  app.get("/estoque", (req, res) => {
    const todoEstoque = bd.estoqueOk;

    res.json({
      " estoqueOk": todoEstoque,
      erro: false,
    });
  });

  app.get("/estoque/nome/:nome", (req, res) => {
    const nome = req.params.nome;
    const produtoEncontrado = bd.estoqueOk.filter(
      (estoque) => estoque.nome == nome
    );

    res.json({
      estoque: produtoEncontrado,
      erro: false,
    });
  });

  app.post("/estoque", (req, res) => {
    const body = req.body;

    try {
      const novoProduto = new Estoque(
        body.id,
        body.nome,
        body.preco,
        body.quantidade,
        body.tipo
      );

      bd.estoqueOk.push(novoProduto);

      res.json({
        msg: `Produto ${novoProduto.nome} adicionado ao estoque`,
        estoqueOk: novoProduto,
        erro: false,
      });
    } catch (error) {
      res.json({
        msg: error.message,
        erro: true,
      });
    }
  });
};
export default estoqueController;
