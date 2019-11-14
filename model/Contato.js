const Mongoose = require('mongoose')
class Contato extends Mongoose.Schema {

    constructor() {

        super({
            // id: {
            //     type: Number
            // },
            cliente: {
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'Cliente',
                required: false
            },
            assunto: {
                type: String
            },
            mensagem: {
                type: String
            },
            datacontato: {
                type: String
            },
            resposta: {
                type: String
            },
            respondido: {
                type: Boolean

            }
        })
        Mongoose.model('Contato', this)
    }

    // constructor(id, cliente, assunto, mensagem, datacontato, icon, resposta, respondido) {
    //     this.id = id
    //     this.cliente = cliente
    //     this.assunto = assunto
    //     this.mensagem = mensagem
    //     this.datacontato = datacontato
    //     this.resposta = ""
    //     this.respondido = false
    //     this.resposta = ""
    //     this.respondido = false


}

module.exports = Contato