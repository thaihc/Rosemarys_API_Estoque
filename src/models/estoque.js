class Estoque {
  constructor(id, item, preco, quantidade, tipo) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.quantidade = this.controleQuantidade(quantidade);
    this.tipo = tipo;
  }

  controleQuantidade = (quantidade) => {
    if (quantidade >= 1) {
      return quantidade;
    } else {
      throw new Error("Produto em falta no Estoque");
    }
  };
}

export default Estoque;
