import EstoqueDAO from "../DAO/estoqueDAO.js";
import EstoqueSchema from "./schema/estoqueSchema.js";

class Estoque {
  constructor(db) {
    this.dao = new EstoqueDAO(db);
  }

  acessaTodoEstoque = async () => {
    try {
      return await this.dao.acessaTodoEstoque();
    } catch (error) {
      throw error;
    }
  };

  acessaUmAtributo = async (nome) => {
    try {
      return await this.dao.acessaUmAtributo(nome);
    } catch (error) {
      throw error;
    }
  };

  acessaPeloNome = async (nome) => {
    try {
      return await this.dao.acessaEstoquePalavraChave(nome);
    } catch (error) {
      throw error;
    }
  };

  acessaUmTipo = async (tipo) => {
    try {
      return await this.dao.acessaUmTipo(tipo);
    } catch (error) {
      throw error;
    }
  };

  acessaPeloId = async (id) => {
    try {
      return await this.dao.acessaPleoId(id);
    } catch (error) {
      throw error;
    }
  };

  insereItem = async (item) => {
    try {
      const novoItem = new EstoqueSchema(
        item.NOME,
        item.PRECO,
        item.QUANTIDADE,
        item.TIPO
      );
      return await this.dao.insereItem(novoItem);
    } catch (error) {
      throw error;
    }
  };

  deletaItem = async (id) => {
    try {
      return await this.dao.deletaItem(id);
    } catch (error) {
      throw error;
    }
  };

  atualizaItem = async (id, item) => {
    try {
      const estoqueAtualizado = new EstoqueSchema(
        item.NOME,
        item.PRECO,
        item.QUANTIDADE,
        item.TIPO
      );

      return await this.dao.atualizaItem(id, estoqueAtualizado);
    } catch (error) {
      throw error;
    }
  };
}
export default Estoque;
