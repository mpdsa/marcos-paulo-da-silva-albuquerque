const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const Customer = require('./routes/customer')
const RandomUser = require('./routes/randomuser')
const CatHttp = require('./routes/cathttp')
const RandomDog = require('./routes/randomdogimage')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Gerador de Usuários
app.get('/randomuser', RandomUser.list)

// Status code do Gato
app.post('/cathttp', CatHttp.statusCode)

// Imagem aleatória de Cachorro
app.get('/randomdog', RandomDog.getImage)

// Clientes
app.get('/customer', Customer.readCustomer)
app.get('/customer/:id', Customer.readCustomerID)
app.post('/customer', Customer.createCustomer)
app.put('/customer/:id', Customer.updateCustomer)
app.delete('/customer/:id', Customer.deleteCustomer)


app.listen(port, () =>
  console.log(`Servidor back-end ligado na porta: ${port}`)
)