import axios from 'axios'


export default async function getUser() {
  const TOTAL_USERS = 50
  
  try {
    const response = await axios.get('https://randomuser.me/api/', {
      params: {
        results: TOTAL_USERS
      }
    });
    
    return response

  } catch (error) {
    console.error(error);
  }
}

