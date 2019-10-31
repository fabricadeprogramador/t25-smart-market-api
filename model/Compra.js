const mongoose = require("mongoose")

class Compra extends mongoose.Schema {
    constructor() {

        super({

<<<<<<< HEAD
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



=======
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

>>>>>>> dc9d713df8562e4a49b6c6d25d573b9f56ecd09b
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

<<<<<<< HEAD
            cliente: {
                nome: {
                    type: String
                },

                cpf: {
                    type: String

                }
            }
=======
            
             cliente: {
                    nome: {
                        type:String
                    },

                    cpf: {
                        type: String
                    }
                }
            
>>>>>>> dc9d713df8562e4a49b6c6d25d573b9f56ecd09b

        })

        mongoose.model("Compra", this)
    }
}




module.exports = Compra