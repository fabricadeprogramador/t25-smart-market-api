
const ComprasController = require('./../controller/ComprasController')

class CompraRoute {

    constructor(app) {

        

        app.route('/compras')
            .get(ComprasController.buscarCompras)
            

        
    }
}

module.exports = CompraRoute