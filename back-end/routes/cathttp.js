const { Buffer } = require('node:buffer');
const axios = require('axios').default

const statusCode = async (req, res, next) => {
  const code = req.body.statusCode

  try {
    const url = `https://http.cat/${code}`
    const { data } = await axios.get(url, {
      responseType: 'arraybuffer'
    })

    const image = await Buffer.from(data, 'binary');
    const base64 = await image.toString('base64')

    res.status(200).send(base64)

  } catch (e) {
    const url = `https://cf.shopee.com.br/file/6043d9950110714e412e508a83be939a`
    const { data } = await axios.get(url, {
      responseType: 'arraybuffer'
    })

    const image = await Buffer.from(data, 'binary');
    const base64 = await image.toString('base64')

    res.status(200).send(base64)
  }




}

module.exports = {
  statusCode
}


