class EstoqueDAO {
  constructor(db) {
    this.db = db;
  }

  acessaTodoEstoque = () => {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM ESTOQUE", (error, rows) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows);
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
            reject(error);
          } else {
            resolve(rows);
          }
        }
      );
    });
  };

  acessaUmTipo = (tipo) => {
    return new Promise((resolve, reject) => {
      this.db.all(
        "SELECT * FROM ESTOQUE WHERE TIPO = ?",
        tipo,
        (error, rows) => {
          if (error) {
            reject(error);
          } else {
            resolve(rows);
          }
        }
      );
    });
  };

  insereItem = (novoItem) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "INSERT INTO ESTOQUE (NOME, PRECO, QUANTIDADE, TIPO) VALUES (?, ?, ?, ?)",
        novoItem.NOME,
        novoItem.PRECO,
        novoItem.QUANTIDADE,
        novoItem.TIPO,
        (error) => {
          if (error) {
            reject(error);
          } else {
            resolve(`Item ${novoItem.NOME} inserido com sucesso`);
          }
        }
      );
    });
  };

  deletaItem = (id) => {
    return new Promise((resolve, reject) => {
      this.db.run("DELETE FROM ESTOQUE WHERE ID = ?", id, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(`Item de id ${id} deletado com sucesso`);
        }
      });
    });
  };

  atualizaItem = (ID, item) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "UPDATE ESTOQUE SET NOME = ?, PRECO = ?, QUANTIDADE = ?, TIPO = ? WHERE ID = ?",
        item.NOME,
        item.PRECO,
        item.QUANTIDADE,
        item.TIPO,
        ID,
        (error) => {
          if (error) {
            reject(error);
          } else {
            resolve(`Item de id ${ID} atualizado com sucesso`);
          }
        }
      );
    });
  };
}

export default EstoqueDAO;
