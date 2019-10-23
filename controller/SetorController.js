'use strict'
const mongoose = require('mongoose');
const Setor = mongoose.model('Setor');


class SetorController {

    static async buscarTodos(req, res) {
        
        try {
            res.json(await Setor.find({}));
        } catch (error) {
            res.status(500).send('Erro ao buscar Setor!');
        }
    }

    static async buscarPorNome(req, res) {

        try {
            let objBusca = req.body;
            res.json(await Setor.find(objBusca));
        } catch (error) {
            res.status(500).send('Setor não encontrado!')
        }
    }

    static async adicionar(req, res) {
        
        try {
            let setorNovo = req.body;
            res.json(await Setor.create(setorNovo));
        } catch (error) {
            res.status(500).send('Erro ao salvar Setor!');
        }
    }

    static async editar(req, res) {

        try {
            let setorEdicao = req.body;
            res.status(200).json(await Setor.findByIdAndUpdate(setorEdicao));
        } catch (error) {
            
        }
    }

    static async deletar(req, res) {
        try {
            let id = req.params.id
            let objDeletar = {}
            objDeletar._id = id

            res.status(200).json(await Setor.findByIdAndDelete(objDeletar))
        } catch (error) {
            res.status(500).send(`Erro ao remover setor!`)
        }
    }

    //ativacao(req, res) {
    
}

module.exports = SetorController