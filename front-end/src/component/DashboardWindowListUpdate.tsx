import { useState } from 'react';
import { updateCustomer, viewCustomerID } from '../api/customerList';

export default function DashboardWindowListUpdate() {
  const [id, setId] = useState('');
  const [dataResultFindApi, setDataResultFindApi] = useState();
  const [fieldNome, setFieldNome] = useState('');
  const [fieldEmail, setFieldEmail] = useState('');
  const [fieldTel, setFieldTel] = useState('');
  const [fieldEnd, setFieldEnd] = useState('');
  const [fieldCPF, setFieldCPF] = useState('');

  return (
    <div className='w-full flex flex-col justify-center items-center h-full'>
      <h1 className='text-lg mt-5'>Insira o ID do contato para editar</h1>
      <form
        className='m-3'
        onSubmit={(e) => {
          e.preventDefault();
          if (id.length === 24) {
            viewCustomerID(id).then((res: any) => {
              setId(res.data._id);
              setDataResultFindApi(res.data);
              setFieldNome(res.data.name);
              setFieldEmail(res.data.email);
              setFieldTel(res.data.tel);
              setFieldEnd(res.data.end);
              setFieldCPF(res.data.cpf);
            });
          }
        }}
      >
        <input
          type='text'
          name='id'
          id='id'
          value={id}
          onChange={(e) => {
            const result = e.target.value.replace(/[^a-z0-9]/gi, '');
            setId(result);
          }}
        />
        <button
          type='submit'
          className='border border-spacing-1 border-solid p-2 bg-indigo-600 text-white'
        >
          Pesquisar
        </button>
      </form>
      {dataResultFindApi && (
        <form
          className='flex flex-col p-2 gap-3 w-full'
          onSubmit={(e) => {
            e.preventDefault();

            updateCustomer(
              id,
              fieldNome,
              fieldEmail,
              parseInt(fieldTel),
              fieldEnd,
              parseInt(fieldCPF)
            ).then((res) => {
              if (res?.status === 200) alert(res?.data);
              setDataResultFindApi(undefined);
              setId('');
              setFieldNome('');
              setFieldEmail('');
              setFieldTel('');
              setFieldEnd('');
              setFieldCPF('');
            });
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
            >
              Atualizar Contato
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
