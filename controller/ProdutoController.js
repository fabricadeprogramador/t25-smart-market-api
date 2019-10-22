
const Produto = require('./../model/Produto')

class ProdutoController{

    static async buscar(req, res){
      try {
        res.json(await Produto.find({}))
      } catch (error) {
        res.status(500).send(`Erro ao buscar produtos: ${error}`)
      }  
      
    }

    static async adicionar(req, res){
      try {
        let novoProduto = req.body;
        res.json(await Produto.create(novoProduto)) 
               
      } catch (error) {
        res.status(500).send(`Erro ao adicionar produtos: ${error}`)
      }
    }

    static async editar(req, res){
      try {
        let editarProduto = req.body
        res.json(await Produto.findByIdAndUpdate(editarProduto))
      } catch (error) {
        res.status(500).send(`Erro ao editar produtos: ${error}`)
      }
    }

    }

module.exports = ProdutoController
