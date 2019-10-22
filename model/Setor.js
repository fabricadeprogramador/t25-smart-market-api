const mongoose = require('mongoose');

class Setor extends mongoose.Schema {

    constructor() {

        super({
            ativo: {
                type: Boolean
            },
            name: {
                type: String
            },
        });
        mongoose.model('Setor', this);
    }
}

module.exports = Setor;