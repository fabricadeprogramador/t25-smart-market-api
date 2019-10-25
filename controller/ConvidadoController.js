'use strict'
const Mongoose = require('mongoose')
const Convidado = Mongoose.model('Convidado')

class ConvidadoController {

    static async buscarTodos(req, res) {

        try {
            res.json(await Convidado.find({}))
        } catch (error) {
            res.status(500).send(`Erro ao buscar convidados: ${error}`)
        }
    }

    static async buscarPorNome(req, res) {
        try {
            let objBusca = req.body
            res.json(await Convidado.find(objBusca))
        } catch (error) {
            res.status(500).send(`Erro ao buscar convidado por nome: ${error}`)
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

    static async editar(req, res) {
        try {
            let convidadoEdicao = req.body
            res.status(200).json(await Convidado.findByIdAndUpdate(convidadoEdicao._id, convidadoEdicao))
        } catch (error) {
            res.status(500).send(`Erro ao editar o convidado: ${error}`)
        }
    }

    static async deletar(req, res) {
        try {
            let id = req.params.id
            let objDeletar = {}
            objDeletar._id = id

            res.status(200).json(await Convidado.findByIdAndDelete(objDeletar._id, objDeletar))
        } catch (error) {
            res.status(500).send(`Erro ao remover convidado: ${error}`)
        }
    }
}

module.exports = ConvidadoController