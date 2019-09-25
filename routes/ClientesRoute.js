const Cliente = require('./../model/Cliente')

class ClienteRoute {

    constructor(app) {

        let cliente1 = new Cliente(0, 'Jão', '000.111.222-33', '019992', 'email@gmail.com', 79083333, 'Rua do Jão', 1999, 'Centro', 'Campo Grande', 'MS', 'complemento', '67999112288', 'M', true)
        let cliente2 = new Cliente(1, 'Maria', '111.000.222-33', '019992', 'email@gmail.com', 79083333, 'Rua do Jão', 1999, 'Centro', 'Campo Grande', 'MS', 'complemento', '67999112288', 'F', true)
        let cliente3 = new Cliente(2, 'Antônio', '222.333.222-33', '019992', 'email@gmail.com', 79083333, 'Rua do Jão', 1999, 'Centro', 'Campo Grande', 'MS', 'complemento', '67999112288', 'M', true)

        this.clientes = [cliente1, cliente2, cliente3]
        this.cont = 3

        app.get('/clientes', (req, res) =>  {
            res.json(this.clientes)
        })

        app.post('/clientes', (req, res) =>  {
            let novo = req.body
            novo.id = this.cont
            this.cont++
            this.clientes.push(novo)
            res.json(novo)
        })

        app.put('/clientes', (req, res) =>  {
            let id = req.body.id
            let erro = true;

            for(let i = 0; i < this.clientes.length; i++){
                if(this.clientes[i].id == id){
                    this.clientes[i] = req.body;
                    erro = false;
                }
            }
            if(erro){
                res.status(500).send("Erro ao editar cliente!");
            }else{
                res.status(200).send("Cliente editado com sucesso!");
            }
        })

        app.post('/clientes/ativacao', (req, res) =>  {
            let id = req.body.id
            let erro = true;

            for(let i = 0; i < this.clientes.length; i++){
                if(this.clientes[i].id == id){
                    this.clientes[i].ativo = !req.body.ativo;
                    erro = false;
                }
            }
            if(erro){
                res.status(500).send("Erro ao editar cliente!");
            }else{
                res.status(200).send("Cliente editado com sucesso!");
            }
        })

    
    }
}

module.exports = ClienteRoute