class Produto{
    constructor(id, ativo,  descricao, preco, qtdDisponivel, marca, setor, imagem){
        this.id = id
        this.ativo = ativo
        this.descricao = descricao
        this.preco = preco
        this.qtdDisponivel =qtdDisponivel
        this.marca = marca
        this.setor = setor
        this.imagem = imagem
    }
}
module.exports = Produto