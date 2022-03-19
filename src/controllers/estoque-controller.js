const estoqueController = (app, bd) => {
  app.get("/estoque", (req, res) => {
    const todoEstoque = bd.estoqueOk;

    res.json({
      estoqueOk: todoEstoque,
      erro: false,
    });
  });

  app.post("/estoque", (req, res) => {
    const body = req.body;
    res.json({
      msg: `Item ${body.titulo} adicionado ao estoque`,
      estoque: body,
    });
  });
};
export default estoqueController;
