const estoqueController = (app) => {
  app.get("/estoque", (req, res) => {
    res.json({
      Estoque: [],
    });
  });

  app.post("/estoque", (req, res) => {
    res.json({
      msg: "Item adicionado ao estoque",
    });
  });
};
export default estoqueController;
