'use strict'
const Convidado = require('./../model/Convidado')

let convidado1 = new Convidado(0, 'Jão da Silva', 25, 'M')
let convidado2 = new Convidado(1, 'Maria da Silva', 45, 'F')
let convidado3 = new Convidado(2, 'Zé da Silva', 18, 'F')

let convidados = [convidado1, convidado2, convidado3]
let cont = 3

class ConvidadoController {

    buscarTodos(req, res) {
        res.json(convidados)
    }

    adicionar(req, res) {
        let novo = req.body
        novo.id = cont
        cont++
        convidados.push(novo)
        res.json(novo)
    }

    editar(req, res) {
        let id = req.body.id
        let erro = true;

        for (let i = 0; i < convidados.length; i++) {
            if (convidados[i].id == id) {
                convidados[i] = req.body
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

        for (let i = 0; i < convidados.length; i++) {
            if (convidados[i].id == id) {
                posicao = i
                erro = false
            }
        }
        if (erro) {
            res.status(500).send("Erro ao remover convidado!")
        } else {

            res.status(200).send(convidados.splice(posicao, 1))
        }
    }
}

module.exports = ConvidadoController