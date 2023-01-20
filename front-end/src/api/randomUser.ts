import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3001' ,
  timeout: 5000
});

export default async function getUser() {
  try {
    const response = await instance.get('/randomuser');
    return response

  } catch (error) {
    console.error(error);
  }
}

