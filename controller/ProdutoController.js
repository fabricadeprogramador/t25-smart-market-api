const Produto = require('./../model/Produto')

let produto1 = new Produto(0, true, 'TV 43 Polegadas', 2300, 200, 'SAMSUNG', 'Eletronicos', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQpt_h9iBMsPp6XV2w3SwuT-h8kjttx_qWuRrLF3aokG07fKzvoMmmlzc9UUxZpKwwg4KdsGVC_XZdkcUJ-SsYCnzMZtXAngCC9XxeiyB7vzaR_ImPmqOG&usqp=CAc')
let produto2 = new Produto(1, true, 'Latinha 350ml de Coca-cola', 3.5, 100, 'COCA', 'Bebidas', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgUV4mrvYK_5-z4G2s2iZ4l1Bv41fw7Z0-dV48lmjTlg1p8wyI')

let produtos = [produto1, produto2]
let cont = 2

class ProdutoController{
    buscar(req, res){
        res.json(produtos)
    }

    salvar(req, res){
        let novo = req.body;
        novo.id = cont;
        cont++
        produtos.push(novo);
        res.json(novo);
    }

    editar(req, res){
        let id = req.body.id;
        let erro = true

        for (let i = 0; i < produtos.length; i++) {
          if (produtos[i].id == id) {
            produtos[i] = req.body;
            erro = false
          }
        }

        if (erro) {
          res.status(500).send('Erro ao editar produto')
        }else{
          res.status(200).send('Produto editado com sucesso')
        }
    }
}

module.exports = ProdutoController
