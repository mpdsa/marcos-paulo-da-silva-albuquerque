export default function DashboardWindowListRead(props: any) {
  return (
    <>
      {props.dataCustomer ? (
        <div>
          <table className='w-full text-left'>
            <tbody className='p-10'>
              <tr className='bg-indigo-400 text-white h-10 border border-spacing-2'>
                <th className='p-1'>Nome</th>
                <th className='p-1'>Email</th>
                <th className='p-1'>Endereço</th>
                <th className='p-1'>Telefone</th>
                <th className='p-1'>CPF</th>
                <th className='p-1'>ID</th>
              </tr>
              {props.dataCustomer.map((item: any, ind: any) => {
                return (
                  <tr key={ind} className='odd:bg-slate-200 hover:bg-slate-400'>
                    <td className='max-w-sm p-1'>{item.name}</td>
                    <td className='max-w-sm p-1'>{item.email}</td>
                    <td className='max-w-sm p-1'>{item.end}</td>
                    <td className='max-w-sm p-1'>{item.tel}</td>
                    <td className='max-w-sm p-1'>{item.cpf}</td>
                    <td className='max-w-sm p-1'>{item._id}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='w-full h-full flex items-center justify-center'>
          <p>Carregando...</p>
        </div>
      )}
    </>
  );
}
