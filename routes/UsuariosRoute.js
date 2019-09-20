const Usuario = require('./../model/Usuario')
class UsuarioRoute {

    constructor(app) {


        let usuario1 = new Usuario(0, true, 'jao da silva', 123, 'ADMIN');
        let usuario2 = new Usuario(1, true, 'maria de fatima', 123, 'ADMIN');
        let usuario3 = new Usuario(2, true, 'roberto de souza', 123, 'ADMIN');

        this.usuarios = [usuario1, usuario2, usuario3];
        this.cont = 3

        app.get('/usuarios', (req, res) => {
            res.json(this.usuarios);
        })

        app.post('/usuarios', (req, res) => {
            let novo = req.body;
            novo.id = this.cont;
            this.cont++;
            this.usuarios.push(novo);
            res.json(novo);
        })

        app.put('/usuarios', (req, res) => {
            let id = req.body.id;
            let erro = true;

            for(let i = 0; i < this.usuarios.length; i++){
                if(this.usuarios[i].id == id){
                    this.usuarios[i] = req.body;
                    erro = false;
                }
            }
            if(erro){
                res.status(500).send("Erro ao editar convidado!");
            }else{
                res.status(200).send("Usuario editado com sucesso!");
            }
        })

        app.delete('/usuarios', (req,res) => {
            let id = req.body.id;
            let erro = true;
            let posicao = null;

            for(let i = 0; i < this.usuarios.length; i++){
                if(this.usuarios[i].id == id){
                    posicao = i;
                    erro = false;
                }
            }
            if(erro){
                res.status(500).send("Erro ao remover convidado!");
            }else{
                res.status(200).send(this.usuarios.splice(posicao, 1));
            }
        })
    }
}

module.exports = UsuarioRoute

