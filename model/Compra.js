const mongoose = require("mongoose")

class Compra extends mongoose.Schema {
    constructor() {

        super({

            Produtos: [
                {
                    descricao: {
                        type: String
                    },

                    valor: {
                        type: Number
                    },
                    marca: {
                        type: String
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
                    type: String
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