import { useState } from 'react';
import createCustomer from '../api/customerList';

export default function DashboardWindowListCreate() {
  const [fieldNome, setFieldNome] = useState('');
  const [fieldEmail, setFieldEmail] = useState('');
  const [fieldTel, setFieldTel] = useState('');
  const [fieldEnd, setFieldEnd] = useState('');
  const [fieldCPF, setFieldCPF] = useState('');

  return (
    <form
      className='flex flex-col p-2 gap-3'
      onSubmit={(e) => {
        e.preventDefault();

        const parseTel = parseInt(fieldTel);
        const parseCPF = parseInt(fieldCPF);
        
        createCustomer(fieldNome, fieldEmail, parseTel, fieldEnd, parseCPF).then(
          (res) => {
            if (res?.status === 201) alert(res?.data);
            setFieldNome('');
            setFieldEmail('');
            setFieldTel('');
            setFieldEnd('');
            setFieldCPF('');
          }
        );
      }}
    >
      <div className='flex flex-col'>
        <label htmlFor='nome'>Nome</label>
        <input
          type='text'
          name=''
          id='nome'
          className='border rounded-lg'
          onChange={(e) => {
            setFieldNome(e.target.value);
          }}
          value={fieldNome}
          required={true}
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name=''
          id='email'
          className='border rounded-lg'
          onChange={(e) => {
            setFieldEmail(e.target.value);
          }}
          value={fieldEmail}
          required={true}
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='tel'>Telefone</label>
        <input
          type='tel'
          name=''
          id='tel'
          className='border rounded-lg'
          onChange={(e) => {
            const result = e.target.value.replace(/[a-z]/gi, '');
            setFieldTel(result);
          }}
          value={fieldTel}
          required={true}
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='end'>Endereço</label>
        <input
          type='text'
          name=''
          id='end'
          className='border rounded-lg'
          onChange={(e) => {
            setFieldEnd(e.target.value);
          }}
          value={fieldEnd}
          required={true}
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='cpf'>CPF</label>
        <input
          type='tel'
          name=''
          id='cpf'
          className='border rounded-lg'
          onChange={(e) => {
            const result = e.target.value.replace(/[a-z]/gi, '');
            setFieldCPF(result);
          }}
          value={fieldCPF}
          required={true}
        />
      </div>
      <div className='flex justify-center items-center'>
        <button
          type='submit'
          className='border w-1/3 p-4 bg-green-500 hover:bg-green-400 shadow-xl'
          onClick={() => {}}
        >
          Adicionar Contato
        </button>
      </div>
    </form>
  );
}
