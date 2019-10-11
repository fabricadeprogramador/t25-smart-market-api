class Contato {

    constructor(id, cliente, assunto, mensagem, datacontato, icon, resposta, respondido) {
        this.id = id
        this.cliente = cliente
        this.assunto = assunto
        this.mensagem = mensagem
        this.datacontato = datacontato
        this.icon = icon
        this.resposta= ""
        this.respondido = false
        
    }
}

module.exports = Contato