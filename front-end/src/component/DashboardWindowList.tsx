import { useState } from 'react';
import { viewCustomer } from '../api/customerList';
import DashboardWindowListCreate from './DashboardWindowListCreate';
import DashboardWindowListUpdate from './DashboardWindowListUpdate';
import DashboardWindowListDelete from './DashboardWindowListDelete';
import DashboardWindowListRead from './DashboardWindowListRead';
import {
  PlusCircleIcon,
  ArrowsPointingOutIcon,
  PencilSquareIcon,
  XCircleIcon,
} from '@heroicons/react/20/solid';

export default function DashboardWindowList() {
  const [showContent, setShowContent] = useState<string>('');
  const [dataCustomer, setDataCustomer] = useState();

  return (
    <div className='h-full w-full overflow-y-scroll'>
      <div className='w-full grid grid-cols-4 group'>
        <button
          className='p-5 hover:bg-slate-500 focus:text-white focus:bg-indigo-700 hover:text-white bg-slate-400 flex items-center justify-center gap-1'
          onClick={(e) => {
            setShowContent('read');
            viewCustomer().then((res: any) => setDataCustomer(res.data));
          }}
        >
          <ArrowsPointingOutIcon className='w-7 h-7' />
          <p>Visualizar</p>
        </button>
        <button
          className='p-5 hover:bg-slate-500 focus:text-white focus:bg-indigo-700 hover:text-white bg-slate-400 flex items-center justify-center gap-1'
          onClick={(e) => {
            setShowContent('create');
          }}
        >
          <PlusCircleIcon className='w-7 h-7' />
          <p>Cadastrar</p>
        </button>

        <button
          className='p-5 hover:bg-slate-500 focus:text-white focus:bg-indigo-700 hover:text-white bg-slate-400 flex items-center justify-center gap-1'
          onClick={(e) => {
            setShowContent('update');
          }}
        >
          <PencilSquareIcon className='w-7 h-7' />
          <p>Editar</p>
        </button>
        <button
          className='p-5 hover:bg-slate-500 focus:text-white focus:bg-indigo-700 hover:text-white bg-slate-400 flex items-center justify-center gap-1'
          onClick={(e) => {
            setShowContent('delete');
          }}
        >
          <XCircleIcon className='w-7 h-7' />
          <p>Excluir</p>
        </button>
      </div>
      <div>
        {showContent === 'create' && <DashboardWindowListCreate />}
        {showContent === 'read' && (
          <DashboardWindowListRead dataCustomer={dataCustomer} />
        )}
        {showContent === 'update' && <DashboardWindowListUpdate />}
        {showContent === 'delete' && <DashboardWindowListDelete />}
      </div>
    </div>
  );
}
