const Convidado = require('./../model/Convidado')
class ConvidadoRoute {

    constructor(app) {

        let convidado1 = new Convidado(0, 'Jão da Silva', 25, 'M')
        let convidado2 = new Convidado(1, 'Maria da Silva', 45, 'F')
        let convidado3 = new Convidado(2, 'Zé da Silva', 18, 'F')

        this.convidados = [convidado1, convidado2, convidado3]
        this.cont = 3

        app.get('/convidados', (req, res) => {
            res.json(this.convidados)
        })

        app.post('/convidados', (req, res) => {
            let novo = req.body
            novo.id = this.cont
            this.cont++
            this.convidados.push(novo)
            res.json(novo)
        })

        app.put('/convidados', (req, res) => {
            let id = req.body.id
            let erro = true

            for (let i = 0; i < this.convidados.length; i++) {
                if (this.convidados[i].id == id) {
                    this.convidados[i] = req.body
                    erro = false
                }
            }
            if (erro) {
                res.status(500).send("Erro ao editar convidado!")
            } else {
                res.status(200).send("Convidado editado com sucesso!")
            }
        })

        app.delete('/convidados/:id', (req, res) => {

            let id = req.params.id
            let erro = true
            let posicao = null

            for (let i = 0; i < this.convidados.length; i++) {
                if (this.convidados[i].id == id) {
                    posicao = i
                    erro = false
                }
            }
            if (erro) {
                res.status(500).send("Erro ao remover convidado!")
            } else {

                res.status(200).send(this.convidados.splice(posicao, 1))
            }
        })
    }
}

module.exports = ConvidadoRoute