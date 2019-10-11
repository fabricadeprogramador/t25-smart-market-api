class Contato {

    constructor(id, cliente, assunto, mensagem, datacontato) {
        this.id = id
        this.cliente = cliente
        this.assunto = assunto
        this.mensagem = mensagem
        this.datacontato = datacontato
        this.resposta = ""
        this.respondido = false

    }
}

module.exports = Contato