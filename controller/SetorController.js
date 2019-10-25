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
            res.status(200).json(await Setor.findByIdAndUpdate(setorEdicao._id, setorEdicao));
        } catch (error) {
            
        }
    }

    /*static async ativacao(req, res) {

        try {
            let setorStatus = req.body;
            res.status(200).json(await Setor.)
        } catch (error) {
            
        }
    }*/
    
}

module.exports = SetorController