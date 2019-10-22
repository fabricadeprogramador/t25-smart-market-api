const ProdutoController = require('./../controller/ProdutoController')

class ProdutoRoute {

  constructor(app) {
    let produto = new ProdutoController()

    app.route('/produtos')
      .get(produto.buscar)
      .get(produto.buscarSetores)
      .post(produto.salvar)
      .put(produto.editar)
  }
}

module.exports = ProdutoRoute