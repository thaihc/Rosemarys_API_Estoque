import Estoque from "../models/estoque.js";

const estoqueController = (app, bd) => {
  const estoqueModel = new Estoque(bd);

  app.get("/estoque", async (req, res) => {
    try {
      const resposta = await estoqueModel.acessaTodoEstoque();
      res.json({
        estoque: resposta,
        erro: false,
      });
    } catch (error) {
      res.json({
        mensagem: error.message,
        erro: false,
      });
    }
  });

  app.get("/estoque/nome/:nome", async (req, res) => {
    const nome = req.params.nome;
    try {
      const resposta = await estoqueModel.acessaUmAtributo(nome);
      res.json({
        estoque: resposta,
        erro: false,
      });
    } catch (error) {
      res.json({
        mensagem: error.message,
        erro: false,
      });
    }
  });

  app.post("/estoque", async (req, res) => {
    const body = req.body;

    try {
      const resposta = await estoqueModel.insereItem(body);
      res.json({
        mensagem: resposta,
        estoquw: body,
        erro: false,
      });
    } catch (error) {
      res.json({
        msg: error.message,
        erro: true,
      });
    }
  });

  app.delete("/estoque/id/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const resposta = await estoqueModel.deletaItem(id);
      res.json({
        mensagem: resposta,
        erro: false,
      });
    } catch (error) {
      res.json({
        mensagem: error.message,
        erro: false,
      });
    }
  });

  app.put("/estoque/id/:id", async (req, res) => {
    const id = req.params.id;

    const body = req.body;

    try {
      const resposta = await estoqueModel.atualizaItem(id, body);
      res.json({
        mensagem: resposta,
        estoque: body,
        erro: false,
      });
    } catch (error) {
      res.json({
        mensagem: error.message,
        erro: false,
      });
    }
  });
};

export default estoqueController;
