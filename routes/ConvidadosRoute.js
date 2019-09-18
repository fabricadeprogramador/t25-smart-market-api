 let convidados = [{
         id: 0,
         nome: "Jão da Silva",
         idade: 30,
         sexo: 'M'
     },
     {
         id: 1,
         nome: "Maria do Bairro",
         idade: 23,
         sexo: 'F'
     },
     {
         id: 2,
         nome: "César de Oliveira",
         idade: 35,
         sexo: 'M'
     },
     {
         id: 3,
         nome: "Pedro dos Cantos",
         idade: 18,
         sexo: 'M'
     }
 ]

 let cont = 4

 class ConvidadoRoute {

     constructor(app) {

         app.get('/convidados', function (req, res) {
             res.json(convidados)
         })

         app.post('/convidados', function (req, res) {
             let novo = req.body
             novo.id = cont
             cont++
             convidados.push(novo)
             res.json(novo)
         })

         app.put('/convidados', function (req, res) {
             res.send("Requisição PUT para /convidados")
         })

         app.delete('/convidados', function (req, res) {
             res.send("Requisição DELETE para /convidados")
         })
     }
 }

 module.exports = ConvidadoRoute