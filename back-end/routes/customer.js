const db = require('../db/db')

const createCustomer = (req, res, next) => {
  const { name, email, tel, end, cpf } = req.body

  db.createCustomer(name, email, tel, end, cpf)
  res.status(201).send('Contato criado com sucesso!')
}

const updateCustomer = (req, res, next) => {
  const { id, name, email, tel, end, cpf } = req.body

  db.updateCustomer(id, name, email, tel, end, cpf)
  res.status(200).send('Contato Atualizado com sucesso!')
}

const readCustomer = async (req, res, next) => {
  const result = await db.readCustomer()
  res.status(200).send(result)
}

const readCustomerID = async (req, res, next) => {
  const result = await db.readCustomerID(req.params.id)
  res.status(200).send(result)
}

const deleteCustomer = async (req, res, next) => {
  const result = await db.deleteCustomer(req.params.id)
  res.status(200).send('Contato removido!')
}


module.exports = { createCustomer, updateCustomer, readCustomer, readCustomerID, deleteCustomer }