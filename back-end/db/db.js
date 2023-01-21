const { MongoClient, ObjectId } = require("mongodb")

const uri =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000"

const client = new MongoClient(uri);

(async function checkConnectionDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Conectado ao mongodb");

  } finally {
    await client.close();
  }
})().catch(console.dir);


async function createCustomer(name, email, tel, end, cpf) {
  try {
    await client.connect();
    const database = client.db("customers");
    const contacts = database.collection("contacts");
    const doc = { name, email, tel, end, cpf }
    const result = await contacts.insertOne(doc);

    console.log(`Um documento foi inserido com o _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}


async function insertCustomer(name, email, tel, end, cpf) {
  try {
    await client.connect();
    const database = client.db("customers");
    const contacts = database.collection("contacts");
    const doc = { name, email, tel, end, cpf }
    const result = await contacts.insertOne(doc);

    console.log(`Um documento foi inserido com o _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}


async function readCustomer() {
  try {
    await client.connect();
    const database = client.db("customers");
    const contacts = database.collection("contacts");
    const result = await contacts.find().toArray();

    console.log(`Exibindo todos os contatos`);
    return result
  } finally {
    await client.close();
  }
}


async function readCustomerID(id) {
  try {
    await client.connect();
    const database = client.db("customers");
    const contacts = database.collection("contacts");
    const result = await contacts.findOne({ _id: ObjectId(id) });

    console.log(`Buscando contato`);
    return result
  } finally {
    await client.close();
  }
}


async function updateCustomer(id, name, email, tel, end, cpf) {
  try {
    await client.connect();
    const database = client.db("customers");
    const contacts = database.collection("contacts");

    const filter = { _id: ObjectId(id) }
    const updateDocument = {
      $set: {
        name, email, tel, end, cpf
      }
    }
    const result = await contacts.updateOne(filter, updateDocument)

    console.log(`Atualizando o contato`);
    return result
  } finally {
    await client.close();
  }
}

async function deleteCustomer(id) {
  try {
    await client.connect();
    const database = client.db("customers");
    const contacts = database.collection("contacts");
    const result = await contacts.deleteOne({ _id: ObjectId(id) });

    console.log(`Excluindo contato`);
    return result
  } finally {
    await client.close();
  }
}


module.exports = {
  createCustomer,
  readCustomer,
  readCustomerID,
  updateCustomer,
  deleteCustomer
}

