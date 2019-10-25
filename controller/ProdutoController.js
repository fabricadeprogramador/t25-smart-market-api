const Mongoose = require('mongoose')
const Produto = Mongoose.model('Produto')

class ProdutoController{

    static async buscarProdutos(req, res){
      try {
        res.json(await Produto.find({}))
      } catch (error) {
        res.status(500).send(`Erro ao buscar produtos: ${error}`)
      }  
      
    } 

    static async adicionarProduto(req, res){
      try {
        let novoProduto = req.body;
        console.log(novoProduto)
        res.json(await Produto.create(novoProduto)) 
               
      } catch (error) {
        res.status(500).send(`Erro ao adicionar produtos: ${error}`)
      }
    }

    static async editar(req, res){
      try {
        let editarProduto = req.body
        res.json(await Produto.findByIdAndUpdate(editarProduto._id,editarProduto))
      } catch (error) {
        res.status(500).send(`Erro ao editar produtos: ${error}`)
      }
    }

    }

module.exports = ProdutoController
