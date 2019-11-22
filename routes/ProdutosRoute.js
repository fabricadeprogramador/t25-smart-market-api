const ProdutoController = require('./../controller/ProdutoController')

class ProdutoRoute {

  constructor(app) {

    app.route('/produtos')
      .get(ProdutoController.buscarProdutos)
      .post(ProdutoController.adicionarProduto)
      .put(ProdutoController.editar)

    //Rota para buscar produtos por setores  
    app.route('/produtos/setor')
       .post(ProdutoController.buscarProdutosPorSetor)  
  }
  
}
module.exports = ProdutoRoute