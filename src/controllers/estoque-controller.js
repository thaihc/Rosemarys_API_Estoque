const estoqueController = (app) => {
  app.get("/estoque", (req, res) => {
    res.json({
      Estoque: [],
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
