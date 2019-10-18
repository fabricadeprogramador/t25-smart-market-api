const Produto = require('./../model/Produto')

class ProdutoController{
    buscar(req, res){
        res.json(produtos)
    }

    buscarSetores(req, res){
      res.json(setores)
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
