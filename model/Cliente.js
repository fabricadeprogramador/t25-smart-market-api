const Mongoose = require('mongoose')
class Cliente extends Mongoose.Schema {

    constructor() {  
        super({
            nome:{
                type: String,
                required: true
            },
            
            cpf:{
                type: String,
                required: true
            },
            rg:{
                type: String
            },
            email:{
                type: String,
                required: true
            },
            usuario:{
                type: String,
                required: true
            },
            cep:{
                type: String
            },
            endereco:{
                type: String
            },
            numero:{
                type: Number
            },
            bairro:{
                type: String
            },
            cidade:{
                type: String
            },
            uf:{
                type: String
            },
            complemento:{
                type: String
            },
            telefone:{
                type: String
            },
            sexo:{
                type: String
            },
            ativo:{
                type: Boolean,
                required: true
            }

        })
        Mongoose.model('Cliente', this)
               
    }
}

module.exports = Cliente