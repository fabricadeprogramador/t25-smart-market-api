"use strict"

const Compra = require("./../model/Compra")

let Compra1 = new Compra("tv", "15", "24/09/19", "dinheiro", "Jose")
let Compra2 = new Compra("celular", "15", "24/09/19", "dinheiro", "Jose")
let Compra3 = new Compra("tablet", "15", "24/09/19", "dinheiro", "Jose")

let compras = [Compra1, Compra2, Compra3]
let cont = 3

class ComprasController {


    buscarCompras(req, res) {
        res.json(compras)
    }

    adicionar(req, res) {
        let novo = req.body
        novo.id = cont
        cont++
        compras.push(novo)
        res.json(novo)
    }

    editar(req, res) {
        let id = req.body.id
        let erro = true

        for (let i = 0; i < compras.length; i++) {
            if (compras[i].id == id) {
                compras[i] = req.body
                erro = false
            }
        }
        if (erro) {
            res.status(500).send("Erro ao editar convidado!")
        } else {
            res.status(200).send("Convidado editado com sucesso!")
        }
    }

    deletar(req, res) {

        let id = req.params.id
        let erro = true
        let posicao = null

        for (let i = 0; i < compras.length; i++) {
            if (compras[i].id == id) {
                posicao = i
                erro = false
            }
        }
        if (erro) {
            res.status(500).send("Erro ao remover convidado!")
        } else {

            res.status(200).send(compras.splice(posicao, 1))
        }
    }
}

module.exports = ComprasController