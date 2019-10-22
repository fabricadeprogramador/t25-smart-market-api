'use strict'
const Mongoose = require('mongoose');
const Usuario = Mongoose.model("Usuario");

class UsuarioController {

    static async buscarTodos(req, res) {

        try {
            res.json(await Usuario.find({}));
        } catch (error) {
            res.status(500).send(`Erro ao buscar usuários: ${error}`);
        }
    }

    static async buscarPorNome(req, res) {
        try {
            let objBusca = req.body
            res.json(await Convidado.find(objBusca));
        } catch (error) {
            res.status(500).send(`Erro ao buscar convidado por nome: ${error}`)
        }
    }

    static async adicionar(req, res) {
        try {
            let usuarioNovo = req.body
            res.json(await Usuario.create(usuarioNovo));

        } catch (error) {
            res.status(500).send(`Erro ao salvar usuário: ${error}`);
        }
    }

    static async editar(req, res) {
        try {
            let usuarioEdicao = req.body;
            res.status(200).json(await Usuario.findByIdAndUpdate(usuarioEdicao));
        } catch (error) {
            res.status(500).send(`Erro ao editar o convidado: ${error}`);
        }
    }

    static async deletar(req, res) {
        try {
            let id = req.params.id
            let objDeletar = {}
            objDeletar._id = id

            res.status(200).json(await Usuario.findByIdAndDelete(objDeletar))
        } catch (error) {
            res.status(500).send(`Erro ao remover convidado: ${error}`)
        }
    }


}

module.exports = UsuarioController;
