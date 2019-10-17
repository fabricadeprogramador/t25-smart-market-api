'use strict'
const Mongoose = require('mongoose')
const Convidado = Mongoose.model('Convidado')

let convidados = []
let cont = 3

class ConvidadoController { 

    static async buscarTodos(req, res) {

        try {
            res.json(await Convidado.find({}))
        } catch (error) {
            res.status(500).send(`Erro ao buscar convidados: ${error}`)
        }
    }

    static async adicionar(req, res) {

        try {
            let convidadoNovo = req.body
            res.json(await Convidado.create(convidadoNovo))

        } catch (error) {
            res.status(500).send(`Erro ao salvar convidado: ${error}`)
        }
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