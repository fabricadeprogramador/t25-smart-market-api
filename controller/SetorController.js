'use strict'
const Setor = module.require('./../model/Setor');

let setor1 = new Setor(0, true, "Eletrodoméstico");
let setor2 = new Setor(1, true, "Informática");
let setor3 = new Setor(2, true, "Alimentos");

let setores = [setor1, setor2, setor3];
let cont = 3;

class SetorController {

    buscarTodos(req, res) {
        res.json(setores)
    }

    adicionar(req, res) {
        let novo = req.body;
        novo.id = cont;
        cont++;
        setores.push(novo);
        res.json(novo);
    }

    editar(req, res) {
        let id = req.body.id;
        let erro = true;

        for(let i = 0; i < setores.length; i++){
            if(setores[i].id == id) {
               setores[i] = req.body;
               erro = false;
            }
        }
        if (erro) {
            res.status(500).send("Erro ao editar Setor!");
        } else {
            res.status(200).send("Setor editado com sucesso!");
        }
    }

    ativacao(req, res) {
        
    }
}

module.exports = SetorController