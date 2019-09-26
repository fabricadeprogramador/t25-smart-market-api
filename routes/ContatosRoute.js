const Contato = require('./../model/Contato')

class ContatoRoute {

    constructor(app) {

        let Contato1 = new Contato(0, "Jose da silva", "tecnico", "Alterar bla bla", "24/09/19", )
        let Contato2 = new Contato(1, "Jose", "tecnico", "Alterar bla bla", "24/09/19", )
        let Contato3 = new Contato(2, "Jose", "tecnico", "Alterar bla bla", "24/09/19", )

        this.contatos = [Contato1, Contato2, Contato3]
        this.cont = 3

        app.get('/contato', (req, res) => {
            res.json(this.contatos)
        })

        app.post('/contato', (req, res) => {
            let novo = req.body
            novo.id = this.cont
            this.cont++ +
                this.contatos.push(novo)
            res.json(novo)
        })

        app.put('/contato', (req, res) => {
            let id = req.body.id
            let erro = true

            for (let i = 0; i < this.contatos.length; i++) {
                if (this.contatos[i].id == id) {
                    this.contatos[i] = req.body
                    erro = false
                }
            }
            if (erro) {
                res.status(500).send("Erro ao editar convidado!")
            } else {
                res.status(200).send("Convidado editado com sucesso!")
            }
        })

        app.delete('/contato/:id', (req, res) => {

            let id = req.params.id
            let erro = true
            let posicao = null

            for (let i = 0; i < this.contatos.length; i++) {
                if (this.contatos[i].id == id) {
                    posicao = i
                    erro = false
                }
            }
            if (erro) {
                res.status(500).send("Erro ao remover convidado!")
            } else {

                res.status(200).send(this.contatos.splice(posicao, 1))
            }
        })
    }
}

module.exports = ContatoRoute
