import EstoqueDAO from "../DAO/estoqueDAO.js";
import Estoque from "../models/estoque.js";

const estoqueController = (app, bd) => {
  const estoqueDAO = new EstoqueDAO(bd);

  app.get("/estoque", (req, res) => {
    estoqueDAO
      .acessaTodoEstoque()
      .then((resposta) => {
        res.json(resposta);
      })
      .catch((erro) => {
        res.json(erro);
      });
  });

  app.get("/estoque/nome/:nome", (req, res) => {
    const nome = req.params.nome;
    estoqueDAO
      .acessaUmAtributo(nome)
      .then((resposta) => {
        res.json(resposta);
      })
      .catch((erro) => {
        res.json(erro);
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

      estoqueDAO
        .insereItem(novoItem)
        .then((resposta) => {
          res.json(resposta);
        })
        .catch((erro) => {
          res.json(erro);
        });
    } catch (error) {
      res.json({
        msg: error.message,
        erro: true,
      });
    }
  });

  app.delete("/estoque/id/:id", (req, res) => {
    const nome = req.params.id;

    tarefaDAO
      .deletaItem(id)
      .then((resposta) => {
        res.json(resposta);
      })
      .catch((erro) => {
        res.json(erro);
      });
  });

  app.put("/estoque/id/:id", (req, res) => {
    const nome = req.params.id;

    const body = req.body;

    try {
      const estoqueAtualizado = new Estoque(
        body.id,
        body.nome,
        body.preco,
        body.quantidade,
        body.tipo
      );

      estoqueDAO
        .atualizaItem(id, estoqueAtualizado)
        .then((resposta) => {
          res.json(resposta);
        })
        .catch((erro) => {
          res.json(erro);
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
