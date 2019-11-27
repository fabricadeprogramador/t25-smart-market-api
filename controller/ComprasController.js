"use strict"
const Mongoose = require("mongoose")
const Compra = Mongoose.model("Compra")




let compras = []
let cont = 3

class ComprasController {


    static async buscarTodos(req, res) {
        try {
            res.json(await Compra.find({}))
        } catch (error) {
            res.status(500).send(`Erro ao buscar compra: ${error}`)
        }
    }

    static async adicionar(req, res) {
        try {
            let compraNova = req.body
            console.log(JSON.stringify(compraNova))
            res.json(await Compra.create(compraNova))
        } catch (error) {
            res.status(500).send(`Erro ao salvar compra: ${error}`)
        }



    }
}

module.exports = ComprasController