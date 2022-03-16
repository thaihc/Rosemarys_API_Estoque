const estoqueController = (app) => {
  app.get("/estoque", (req, res) => {
    res.json({
      Estoque: [],
    });
  });
};
export default estoqueController;
