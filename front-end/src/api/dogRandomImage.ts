import axios from 'axios'


export default async function getDogRandom () {
  const getUrlDog = await (await axios.get('http://localhost:3001/randomdog')).data;
  
  return getUrlDog;
};