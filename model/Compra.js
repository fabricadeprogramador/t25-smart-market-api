const mongoose = require("mongoose")

class Compra extends mongoose.Schema {
    constructor() {

        super({


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

        mongoose.model("Compra", this)
    }
}




module.exports = Compra