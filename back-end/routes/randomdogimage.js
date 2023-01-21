const axios = require('axios').default


const getImage = async (req, res, next) => {
  const { data } = await axios.get('https://random.dog/woof.json?include=jpg,png')

  res.status(200).send(data.url)
}


module.exports = {
  getImage
}