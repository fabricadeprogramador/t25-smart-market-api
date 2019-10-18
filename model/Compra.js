const mongoose = require("mongoose")

class Compra extends mongoose.Schema {
    constructor() {

        Super({


            valorTotal: {
                type: Number

            },

            data: {

                type: String
            },

            pagamento: {

                type: String
            }

        })

        mongoose.model("Compras", this)
    }
}




module.exports = Compra