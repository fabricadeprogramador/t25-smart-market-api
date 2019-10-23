const ProdutoController = require('./../controller/ProdutoController')

class ProdutoRoute {

  constructor(app) {

    app.route('/produtos')
      .get(ProdutoController.buscar)
      .post(ProdutoController.adicionar)
      .put(ProdutoController.editar)
  }
}

module.exports = ProdutoRoute