class EstoqueDAO {
  constructor(db) {
    this.db = db;
  }

  acessaTodoEstoque = () => {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM ESTOQUE", (error, rows) => {
        if (error) {
          reject({
            mensagem: error.message,
            erro: true,
          });
        } else {
          resolve({
            estoque: rows,
            erro: false,
          });
        }
      });
    });
  };

  acessaUmAtributo = (nome) => {
    return new Promise((resolve, reject) => {
      this.db.all(
        "SELECT * FROM ESTOQUE WHERE NOME = ?",
        nome,
        (error, rows) => {
          if (error) {
            reject({
              mensagem: error.message,
              erro: true,
            });
          } else {
            resolve({
              estoque: rows,
              erro: false,
            });
          }
        }
      );
    });
  };

  insereItem = (novoItem) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "INSERT INTO ESTOQUE(ID, NOME, PRECO, QUANTIDADE, TIPO) VALUES (?, ?, ?, ?, ?)",
        novoItem.id,
        novoItem.nome,
        novoItem.preco,
        novoItem.quantidade,
        novoItem.tipo,
        (error) => {
          if (error) {
            reject({
              mensagem: error.message,
              erro: true,
            });
          } else {
            resolve({
              mensagem: `Item ${novoItem.nome} inserido com sucesso`,
              item: novoItem,
              erro: false,
            });
          }
        }
      );
    });
  };

  deletaItem = (id) => {
    return new Promise((resolve, reject) => {
      this.db.run("DELETE FROM ESTOQUE WHERE ID = ?", id, (error) => {
        if (error) {
          reject({
            mensagem: error.message,
            erro: true,
          });
        } else {
          resolve({
            item: `Item de id ${id} deletado com sucesso`,
            erro: false,
          });
        }
      });
    });
  };

  atualizaItem = (id, item) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "UPDATE ESTOQUE SET NOME = ?, PRECO = ?, QUANTIDADE = ? TIPO = ?",
        item.nome,
        item.preco,
        item.quantidade,
        item.tipo,
        id,
        (error) => {
          if (error) {
            reject({
              mensagem: error.message,
              erro: true,
            });
          } else {
            resolve({
              mensagem: `Item de id ${id} atualizado com sucesso`,
              item: item,
              erro: false,
            });
          }
        }
      );
    });
  };
}

export default EstoqueDAO;
