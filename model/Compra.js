const mongoose = require("mongoose")

class Compra extends mongoose.Schema {
    constructor() {

        super({
            produtos: [ {
                nome: {
                    type: String
                },

                marca: {
                    type: String
                },

                valor: {
                    type: Number
                },

                quantidade: {
                    type:Number
                }
            }

            ],
            valorTotal: {
                type: Number

            },

            data: {

                type: String
            },

            pagamento: {

                type: String
            },

            
             cliente: {
                    nome: {
                        type:String
                    },

                    cpf: {
                        type: String
                    }
                }
            

        })

        mongoose.model("Compra", this)
    }
}




module.exports = Compra