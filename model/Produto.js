const Mongoose = require('mongoose')
class Produto extends Mongoose.Schema{

    constructor(){
        super({
            nome:{
                type: String,
                required: true
            },
            imagem: {
                type: String
            },
            valor: {
                type: Number,
                required: true 
            },
            setor: {
                nome:{
                    type: String
                }
            },
            marca: {
                type: String,
                required: true 
            },
            quantidade: {
                type: Number,
                required: true 
            },
            descricao: {
                type: String,
                },
            disponivel: {
                type: Boolean,
            },
        })
        Mongoose.model('Produto', this)
    }
}
module.exports = Produto
