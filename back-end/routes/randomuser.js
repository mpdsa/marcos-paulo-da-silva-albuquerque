const axios = require('axios').default

const instance = axios.create({
  baseURL: 'https://randomuser.me/',
  timeout: 5000
});

const list = async (req, res, next) => {
  const result = await instance.get('/api/?results=50',)
  res.json(result.data)
}

module.exports = {
  list
}