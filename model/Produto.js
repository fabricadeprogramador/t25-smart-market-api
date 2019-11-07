const Mongoose = require('mongoose')
class Produto extends Mongoose.Schema {

    constructor() {
        super({
            

            nome: {
                type: String,
                // required: true
            },
            imagem: {
                type: String
            },
            valor: {
                type: Number,
                // required: true 
            },
            setor: {
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'Setor',
                required: false
            },
            marca: {
                type: String,
                // required: true 
            },
            quantidade: {
                type: Number,
            },
            descricao: {
                type: String,
            },
            disponivel: {
                type: Boolean,
                
            },
            validade: {
                type: String
            }
        })
        Mongoose.model('Produto', this)
    }
}
module.exports = Produto