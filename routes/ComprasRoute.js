const Compra= require('./../model/Compra')

class CompraRoute {

    constructor(app) {

        let Compra1 = new Compra("tv", "15", "24/09/19", "dinheiro", "Jose")
        let Compra2 = new Compra("tv", "15", "24/09/19", "dinheiro", "Jose")
        let Compra3 = new Compra("tv", "15", "24/09/19", "dinheiro", "Jose")

        this.Compras = [Compra1, Compra2, Compra3]
        this.cont = 3

        app.get('/compras', (req, res) => {
            res.json(this.Compras)
        })

        app.post('/compras', (req, res) => {
            let novo = req.body
            novo.id = this.cont
            this.cont++ +
                this.Compras.push(novo)
            res.json(novo)
        })

        app.put('/compras', (req, res) => {
            let id = req.body.id
            let erro = true

            for (let i = 0; i < this.Compras.length; i++) {
                if (this.Compras[i].id == id) {
                    this.Compras[i] = req.body
                    erro = false
                }
            }
            if (erro) {
                res.status(500).send("Erro ao editar convidado!")
            } else {
                res.status(200).send("Convidado editado com sucesso!")
            }
        })

        app.delete('/compras/:id', (req, res) => {

            let id = req.params.id
            let erro = true
            let posicao = null

            for (let i = 0; i < this.Compras.length; i++) {
                if (this.Compras[i].id == id) {
                    posicao = i
                    erro = false
                }
            }
            if (erro) {
                res.status(500).send("Erro ao remover convidado!")
            } else {

                res.status(200).send(this.Compras.splice(posicao, 1))
            }
        })
    }
}

module.exports = CompraRoute