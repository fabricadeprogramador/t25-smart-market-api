'use strict'
const Mongoose = require('mongoose')
const Contato = Mongoose.model('Contato')

class ContatoController {

    static async buscarTodos(req, res) {

        try {
            res.json(await Contato.find({}).populate('cliente', 'nome cpf').exec())
        } catch (error) {
            // res.status(500).send('Erro ao buscar contatos: ${error}')
            res.status(500).send(`Erro ao buscar contato por nome: ${error}`)
        }
    }

    static async buscarPorCliente(req, res) {

        let objetoBusca = req.body

        try {
            res.json(await Contato.find({
                "cliente": objetoBusca
            }))
        } catch (error) {
            // res.status(500).send('Erro ao buscar contatos: ${error}')
            res.status(500).send(`Erro ao buscar contato por nome: ${error}`)
        }
    }

    static async adicionar(req, res) {

        try {
            let contatoNovo = req.body
            res.json(await Contato.create(contatoNovo))
        } catch (error) {
            // res.status(500).send('Erro ao salvar contato: ${error}')
            res.status(500).send(`Erro ao salvar contato: ${error}`)
        }
    }

    static async editar(req, res) {
        try {
            let contatoEdicao = req.body
            res.status(200).json(await Contato.findByIdAndUpdate(contatoEdicao._id, contatoEdicao))
        } catch (error) {
            res.status(500).send(`Erro ao editar o contato: ${error}`)
        }
    }

    // editar(req, res) {
    //     let id = req.body.id
    //     let erro = true

    //     for (let i = 0; i < contatos.length; i++) {
    //         if (contatos[i].id == id) {
    //             contatos[i] = req.body
    //             erro = false
    //         }
    //     }
    //     if (erro) {
    //         res.status(500).send("Erro ao editar contato!")
    //     } else {
    //         res.status(200).send("Contato editado com sucesso!")
    //     }
    // }

    // deletar(req, res) {
    //     let id = req.params.id
    //     let erro = true
    //     let posicao = null

    //     for (let i = 0; i < contatos.length; i++) {
    //         if (contatos[i].id == id) {
    //             posicao = i
    //             erro = false
    //         }
    //     }
    //     if (erro) {
    //         res.status(500).send("Erro ao remover convidado!")
    //     } else {

    //         res.status(200).send(contatos.splice(posicao, 1))
    //     }
    // }

}

module.exports = ContatoController