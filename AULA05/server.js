const http = require('http')
const express = require('express')

const clientes = [
    {
        id: 1,
        nome: "José",
        email: "jose@email.com"
    },
    {
        id: 2,
        nome: "Maria",
        email: "maria@email.com"
    }
]

const app = express()
const bodyParser = require('body-parser')
let contador = 3  // Porque já colocamos 2 ids na lista acima
app.use(bodyParser.json())


// const app = express()
const porta = 3000
app.set('port', porta)

app.get("/teste", (req, res, next) => {
    res.send("Hello World")
})

app.get("/clientes", (req, res, next) =>{
    res.send(clientes)
})

app.post("/clientes", (req, res, next) =>{
    const cliente = req.body  // Variavel local
    clientes.push(   // push na lista de clientes
        {
            id: contador+= 1, 
            nome: cliente.nome, 
            email: cliente.email
        }
    )
    console.log(clientes)
    //res.end()
    res.status(201).json(clientes)
})

app.put("/clientes", (req, res, next) => {
    clientes.forEach((cliente) => {
        if(cliente.id == req.body.id){
            cliente.nome = req.body.nome
            cliente.email = req.body.email
        }
    })
    console.log(clientes)
    res.status(204).end()
})

const server = http.createServer(app)
server.listen(3000)