'use strict'
const Mongoose = require('mongoose')
const Cliente = Mongoose.model('Cliente')

let clientes = []
let cont = 3

class ClienteController {

    static async buscarTodos(req, res) {
        try {
            res.json(await Cliente.find({}))
        } catch (error) {
            res.status(500).send(`Erro ao buscar clientes: ${error}`)
        }
    }

    static async adicionar(req, res) {
        try {
            let clienteNovo = req.body
            res.json(await Cliente.create(clienteNovo))

        } catch (error) {
            res.status(500).send(`Erro ao salvar cliente: ${error}`)
        }
    }



    editar(req, res) {
        let id = req.body.id
        let erro = true

        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].id == id) {
                clientes[i] = req.body;
                erro = false;
            }
        }
        if (erro) {
            res.status(500).send("Erro ao editar cliente!");
        } else {
            res.status(200).send("Cliente editado com sucesso!");
        }
    }

    ativacao(req, res) {
        let id = req.body.id
        let erro = true;
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].id == id) {
                clientes[i].ativo = !clientes[i].ativo;
                erro = false;
            }
        }
        if (erro) {
            res.status(500).send("Erro ao editar cliente!");
        } else {
            res.status(200).send("Cliente editado com sucesso!");
        }
    }
}
module.exports = ClienteController