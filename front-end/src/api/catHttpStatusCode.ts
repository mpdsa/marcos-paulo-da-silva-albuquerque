import axios from 'axios'

export default async function getHttpStatusCode(statusCode: number = 101) {
  try {
    const response = await axios.post('http://127.0.0.1:3001/cathttp', {statusCode});
    return response

  } catch (error) {
    console.error(error);
  }
}

