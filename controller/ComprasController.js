"use strict"
const Mongoose = require ("mongoose")
const Compra = Mongoose.model("Compra")




let compras = []
let cont = 3

class ComprasController {


   static async buscarCompras(req, res) {
        try {
            res.json(await Compra.find({}))
        } catch (error) {
            res.status(500).send(`Erro ao buscar compra: ${error}`)
        }
    }

    
    }


module.exports = ComprasController