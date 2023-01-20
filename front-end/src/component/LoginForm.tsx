import { useEffect, useState } from 'react';
import { ILogin } from '../interface/ILogin';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import login from '../api/loginUser';
import { useNavigate } from 'react-router-dom';

export function LoginForm(props: any) {
  const [localStorageUser, setLocalStorageUser] = useState<string>('');
  const [localStoragePass, setLocalStoragePass] = useState<string>('');
  const [checkAccount, setCheckAccount] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userRemembered: ILogin = {
      username: localStorage.getItem('username'),
      password: localStorage.getItem('password'),
    };

    const { username, password } = userRemembered;

    if (username) setLocalStorageUser(username);
    if (password) setLocalStoragePass(password);

    props.token && navigate('/dashboard', { state: props.token });
  }, [props.token]);

  return (
    <form
      className='mt-8 space-y-6'
      onSubmit={(e) => {
        e.preventDefault();
        const result = login(localStorageUser, localStoragePass);
        props.setToken(result);
      }}
    >
      <input type='hidden' name='remember' defaultValue='true' />
      <div className='-space-y-px rounded-md shadow-sm'>
        <div>
          <label htmlFor='email-address' className='sr-only'>
            Email
          </label>
          <input
            id='email-address'
            name='email'
            type='text'
            autoComplete='email'
            required
            className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
            placeholder='Email'
            onChange={({ target: { value } }) => {
              setLocalStorageUser(value);
            }}
            value={localStorageUser}
          />
        </div>
        <div>
          <label htmlFor='password' className='sr-only'>
            Senha
          </label>
          <input
            id='password'
            name='password'
            type='password'
            autoComplete='current-password'
            required
            className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
            placeholder='Senha'
            value={localStoragePass}
            onChange={({ target: { value } }) => setLocalStoragePass(value)}
          />
        </div>
      </div>

      <div>
        <button
          type='submit'
          className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          onClick={(e) => {
            localStorage.clear();

            if (checkAccount) {
              localStorage.setItem(`username`, localStorageUser);
              localStorage.setItem(`password`, localStoragePass);
            }
          }}
        >
          <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
            <LockClosedIcon
              className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
              aria-hidden='true'
            />
          </span>
          Entrar
        </button>
      </div>
      <div className='flex flex-col items-center justify-center'>
        {props.token === false && (
          <div className=' text-red-300 shadow-none drop-shadow-none'>
            <p>Usuário ou senha incorretos.</p>
          </div>
        )}
        <div className='flex items-center'>
          <input
            id='remember-me'
            name='remember-me'
            type='checkbox'
            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
            onChange={() => setCheckAccount(!checkAccount)}
            defaultChecked={checkAccount}
          />

          <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
            Lembrar
          </label>
        </div>
      </div>
    </form>
  );
}
