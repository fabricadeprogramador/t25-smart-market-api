class Produto{
    constructor(id, disponivel,  descricao, valor, qtdDisponivel, marca, setor, imagem, validade){
        this.id = id
        this.diponivel = disponivel
        this.descricao = descricao
        this.valor = valor
        this.qtdDisponivel =qtdDisponivel
        this.marca = marca
        this.setor = setor
        this.imagem = imagem
        this.validade = validade
    }
}
module.exports = Produto