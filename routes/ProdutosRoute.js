const ProdutoController = require('./../controller/ProdutoController')

class ProdutoRoute {

  constructor(app) {

    app.route('/produtos')
      .get(ProdutoController.buscarProdutos)
      .post(ProdutoController.adicionarProduto)
      .put(ProdutoController.editar)
  }
}

module.exports = ProdutoRoute