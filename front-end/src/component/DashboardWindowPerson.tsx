import { Form } from 'react-router-dom';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import getUser from '../api/randomUser';

export default function DashboardWindowPerson(props: any) {
  const [paramSearch, setParamSearch] = useState<string>('');
  const [textSearch, setTextSearch] = useState<string>('');
  const [pagination, setPagination] = useState<number>(0);
  const [filterData, setFilterData] = useState<[]>();

  useEffect(() => {
    try {
      const test = props.dataApiProvider.slice(0, 3);
      setFilterData(test);
      const dataPages = props.dataApiProvider.length / 3;
      setPagination(dataPages);
    } catch (e) {
      return;
    }
  }, [props.dataApiProvider]);

  function filterUser(text: string = '', param: string = '') {
    if (text.length === 0 && param.length === 0) return;

    if (param === 'username' && text.length > 0) {
      const filter = props.dataApiProvider.filter(
        (item: any) => item.login.username === text
      );
      props.setDataApiProvider(filter);
    }

    if (param === 'email' && text.length > 0) {
      const filter = props.dataApiProvider.filter((item: any) => item.email === text);
      props.setDataApiProvider(filter);
    }

    if (param === 'name' && text.length > 0) {
      const filter = props.dataApiProvider.filter(
        (item: any) => item.name.first === text
      );
      props.setDataApiProvider(filter);
    }

    if (param === 'username' && text.length === 0) {
      getUser().then((res: any) => {
        props.setDataApiProvider(res.data.results);
      });
    }

    if (param === 'email' && text.length === 0) {
      getUser().then((res: any) => {
        props.setDataApiProvider(res.data.results);
      });
    }

    if (param === 'name' && text.length === 0) {
      getUser().then((res: any) => {
        props.setDataApiProvider(res.data.results);
      });
    }
  }

  function RepeatButtonPagination() {
    const pages = [];
    for (let index = 0; index <= pagination; index++) {
      pages.push(
        <button
          className='hover:text-blue-800 hover:bg-orange-100 focus:font-bold focus:border focus:bg-slate-200 p-1 text-blue-600'
          key={index}
          onClick={() => {
            const filter = props.dataApiProvider.slice(index, index + 3);
            setFilterData(filter);
          }}
        >
          {index + 1}
        </button>
      );
    }
    return pages;
  }

  return (
    <div className='h-full overflow-scroll'>
      {props.dataApiProvider ? (
        <>
          <div className='w-full p-2 bg-slate-200 shadow-lg shadow-slate-500'>
            <Form>
              <div className='flex items-center'>
                <input
                  className='border-slate-500 w-full'
                  type={'text'}
                  placeholder='Pesquisar'
                  value={textSearch}
                  onChange={(e) => setTextSearch(e.target.value)}
                />
                <button
                  type='submit'
                  onClick={(e) => {
                    e.preventDefault();
                    filterUser(textSearch, paramSearch);
                  }}
                >
                  <MagnifyingGlassCircleIcon
                    className='h-10 w-10 text-indigo-500 hover:text-indigo-400'
                    aria-hidden='true'
                  />
                </button>
              </div>
              <div className='flex py-1 gap-x-5'>
                <strong>Tipo de pesquisa: </strong>
                <span className='flex  gap-3 items-center justify-center'>
                  <label className='align-middle flex items-center gap-1'>
                    <input
                      type='radio'
                      name='tipo'
                      value='name'
                      id='nome'
                      onClick={(e: any) => {
                        setParamSearch(e.target.value);
                      }}
                    />
                    Nome{' '}
                  </label>
                  <label className='align-middle flex items-center gap-1'>
                    <input
                      type='radio'
                      name='tipo'
                      value='email'
                      id='email'
                      onClick={(e: any) => {
                        setParamSearch(e.target.value);
                      }}
                    />
                    Email{' '}
                  </label>
                  <label className='align-middle flex items-center gap-1'>
                    <input
                      type='radio'
                      name='tipo'
                      value='username'
                      id='nick'
                      onClick={(e: any) => {
                        setParamSearch(e.target.value);
                      }}
                    />
                    Usuário{' '}
                  </label>
                </span>
              </div>
            </Form>
          </div>
          <div>
            <div className='py-5 px-3 gap-1 border-r-4 w-full flex flex-wrap'>
              <strong className='py-5 px-0'>Página: </strong>
              {RepeatButtonPagination()}
            </div>
          </div>
          <div className='p-3 gap-4 border-r-4 w-full grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-5'>
            {filterData
              ? filterData.map((item: any, key: any) => {
                  return (
                    <div
                      key={key}
                      className='w-auto flex flex-wrap justify-center bg-slate-100 p-10 px-0 shadow-lg shadow-slate-300'
                    >
                      <img
                        className='w-16 md:w-32 lg:w-48 lg:border-2 rounded-lg shadow-lg shadow-slate-400 border-indigo-500'
                        src={item.picture.large}
                        alt={item.picture.large}
                      />
                      <div className='flex flex-wrap justify-center p-5 flex-col'>
                        <p>
                          <strong>Nome: </strong>
                          {item.name.first + ' ' + item.name.last}
                        </p>

                        <p>
                          <strong>Email: </strong>
                          {item.email}
                        </p>
                        <p>
                          <strong>Nick: </strong>
                          {item.login.username}
                        </p>
                        <p>
                          <strong>Idade: </strong>
                          {item.dob.age}
                        </p>
                      </div>
                    </div>
                  );
                })
              : props.dataApiProvider.map((item: any, key: any) => {
                  return (
                    <div
                      key={key}
                      className='w-auto flex flex-wrap justify-center bg-slate-100 p-10 shadow-lg shadow-slate-300'
                    >
                      <img
                        className='w-16 h-16 md:w-32 lg:w-48'
                        src={item.picture.large}
                        alt={item.picture.large}
                      />
                      <div className='flex flex-wrap justify-center p-5 flex-col'>
                        <p>
                          <strong>Nome Completo: </strong>
                          {item.name.first + ' ' + item.name.last}
                        </p>

                        <p>
                          <strong>Email: </strong>
                          {item.email}
                        </p>
                        <p>
                          <strong>Nick: </strong>
                          {item.login.username}
                        </p>
                        <p>
                          <strong>Idade: </strong>
                          {item.dob.age}
                        </p>
                      </div>
                    </div>
                  );
                })}
          </div>
        </>
      ) : (
        <div className='w-full h-full flex items-center justify-center'>
          <p>Carregando...</p>
        </div>
      )}
    </div>
  );
}
