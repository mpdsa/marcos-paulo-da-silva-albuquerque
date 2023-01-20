import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3001' ,
  timeout: 5000
});

export default async function createCustomer(name: string, email: string, tel: number, end:string, cpf: number) {  
  try {
    const response = await instance.post('/customer', {
       name, email, tel, end, cpf 
    });
    
    return response

  } catch (error) {
    console.error(error);
  }
}


export async function viewCustomer() {  
  try {
    const response = await instance.get('/customer');
    return response

  } catch (error) {
    console.error(error);
  }
}

export async function viewCustomerID(id: string) {
  if (id.length < 24) return

  try {
    const response = await instance.get(`/customer/${id}`);
    
    return response

  } catch (error) {
    console.error(error);
  }
}



export async function updateCustomer(id: string, name: string, email: string, tel: number, end:string, cpf: number) {
  try {
    const response = await instance.put(`/customer/${id}`, {
        id,
        name,
        email,
        tel,
        end,
        cpf
    });
    
    return response

  } catch (error) {
    console.error(error);
  }
}

export async function deleteCustomer(id: string) {
  try {
    const response = await instance.delete(`/customer/${id}`);
    
    return response

  } catch (error) {
    console.error(error);
  }
}

