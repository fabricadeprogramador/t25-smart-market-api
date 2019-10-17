const ProdutoController = require('./../controller/ProdutoController')

class ProdutoRoute {


  constructor(app) {


    // let produto1 = new Produto(0, true, 'TV 43 Polegadas', 2300, 49, 'SAMSUNG', 'Eletronicos', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQpt_h9iBMsPp6XV2w3SwuT-h8kjttx_qWuRrLF3aokG07fKzvoMmmlzc9UUxZpKwwg4KdsGVC_XZdkcUJ-SsYCnzMZtXAngCC9XxeiyB7vzaR_ImPmqOG&usqp=CAc', '12/31/2099')
    // let produto2 = new Produto(1, true, 'Latinha 350ml de Coca-cola', 3.5, 49, 'COCA', 'Bebidas', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgUV4mrvYK_5-z4G2s2iZ4l1Bv41fw7Z0-dV48lmjTlg1p8wyI', '09/30/2019')

    let produto = new ProdutoController()

    app.route('/produtos')
      .get(produto.buscar)
      .get(produto.buscarSetores)
      .post(produto.salvar)
      .put(produto.editar)
  }
}

module.exports = ProdutoRoute