import getUser from '../api/randomUser';
import { IDashboardMenu } from '../interface/IDashboard';
import Cat from '/src/assets/cat.svg';
import Dog from '/src/assets/dog.svg';
import Person from '/src/assets/person.svg';
import Agenda from '/src/assets/agenda.svg';

export function DashboardMenu(props: IDashboardMenu) {
  const { setShowContent, setDataApiProvider } = props;

  return (
    <div className='flex flex-wrap items-start px-3 w-1/4 h-full max-sm:w-full max-sm:h-auto max-sm:px-0 border-r-8 bg-indigo-600'>
      <div
        onClick={() => {
          setShowContent('person');
          getUser().then((res: any) => setDataApiProvider(res.data.results));
        }}
        className='w-full group active:bg-slate-300 hover:bg-slate-100 flex flex-col items-center justify-center px-3 py-3 min-h-fit h-1/4'
      >
        <img
          src={Person}
          className='h-1/2 w-1/2 text-indigo-500 group-hover:text-indigo-400'
          aria-hidden='true'
        />
        <strong className='text-center text-lg text-white group-hover:text-black'>
          Gerador de Usuários
        </strong>
      </div>
      <div
        onClick={() => setShowContent('cat')}
        className='w-full group active:bg-slate-300 hover:bg-slate-100 flex flex-col items-center justify-center px-3 py-3 min-h-fit h-1/4'
      >
        <img
          src={Cat}
          className='h-1/2 w-1/2 text-indigo-500 group-hover:text-indigo-400'
          aria-hidden='true'
        />
        <strong className='text-center  text-white group-hover:text-black text-lg'>
          Gato HTTP
        </strong>
      </div>
      <div
        onClick={() => setShowContent('dog')}
        className='w-full group active:bg-slate-300 hover:bg-slate-100 flex flex-col items-center justify-center px-3 py-3 min-h-fit h-1/4'
      >
        <img
          src={Dog}
          className='h-1/2 w-1/2 text-indigo-500 group-hover:text-indigo-400'
          aria-hidden='true'
        />
        <strong className='text-center  text-white group-hover:text-black text-lg'>
          Gerador de Cachorro
        </strong>
      </div>
      <div
        onClick={() => setShowContent('list')}
        className='w-full group active:bg-slate-300 hover:bg-slate-100 flex flex-col items-center justify-center px-3 py-3 min-h-fit h-1/4'
      >
        <img
          src={Agenda}
          className='h-1/2 w-1/2 text-indigo-500 group-hover:text-indigo-400'
          aria-hidden='true'
        />
        <strong className='text-center  text-white group-hover:text-black text-lg'>
          Lista de Clientes
        </strong>
      </div>
    </div>
  );
}
