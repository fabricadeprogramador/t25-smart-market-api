const Mongoose = require('mongoose')
class Produto extends Mongoose.Schema{

    constructor(){
        super({
            disponivel: {
                type: Boolean,
                required: true 
            },
            descricao: {
                type: String,
                required: true 
            },
            valor: {
                type: Number,
                required: true 
            },
            qtdDisponivel: {
                type: Number,
                required: true 
            },
            marca: {
                type: String,
                required: true 
            },
            imagem: {
                type: String
            },
            validade: {
                type: Date
            },
            // setor: {
            //     type: Mongoose.Schema.Types.ObjectId,
            //     ref: 'Setor',
            //     required: false
            // }
        })
        Mongoose.model('Produto', this)
    }
}
module.exports = Produto

// class Produto {
//     constructor(id, disponivel, ativo, descricao, valor, qtdDisponivel, marca, setor, imagem, validade) {

//         this.id = id
//         this.disponivel = disponivel
//         this.ativo = ativo

//         this.descricao = descricao
//         this.valor = valor
//         this.qtdDisponivel = qtdDisponivel
//         this.marca = marca
//         this.setor = setor
//         this.imagem = imagem
//         this.validade = validade
//     }
// }
// module.exports = Produto