import { useState } from 'react';
import { deleteCustomer, viewCustomerID } from '../api/customerList';
import { IListCreate } from '../interface/IList';

export default function DashboardWindowListDelete() {
  const [id, setId] = useState('');
  const [dataResultFindApi, setDataResultFindApi] = useState<IListCreate>();
  const [fieldNome, setFieldNome] = useState('');
  const [fieldEmail, setFieldEmail] = useState('');
  const [fieldTel, setFieldTel] = useState('');
  const [fieldEnd, setFieldEnd] = useState('');
  const [fieldCPF, setFieldCPF] = useState('');

  return (
    <div className='w-full flex flex-col justify-center items-center h-full'>
      <h1 className='text-lg mt-5'>Insira o ID do contato para excluir</h1>
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
        <div className='mt-10 w-full px-5'>
          <h2 className='text-xl py-2 font-bold'>
            Por favor confirme os dados para exclusão.
          </h2>
          <p>
            <strong>Nome: </strong>
            {dataResultFindApi.name}
          </p>
          <p>
            <strong>Email: </strong>
            {dataResultFindApi.email}
          </p>
          <p>
            <strong>Endereço: </strong>
            {dataResultFindApi.end}
          </p>
          <p>
            <strong>Telefone: </strong>
            {dataResultFindApi.tel}
          </p>
          <p>
            <strong>CPF: </strong>
            {dataResultFindApi.cpf}
          </p>
          <form
            className='w-full flex justify-center'
            onSubmit={(e) => {
              e.preventDefault();
              deleteCustomer(id).then((res) => {
                if (res?.status === 200) alert(res?.data);
                setDataResultFindApi(undefined);
                setId('');
              });
            }}
          >
            <button
              className='border w-1/3 p-4 bg-red-500 hover:bg-red-400 shadow-xl'
              type='submit'
            >
              Excluir contato
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
