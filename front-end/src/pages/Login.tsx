import { useState } from 'react';
import { LoginForm } from '../component/LoginForm.js';

export default function Login() {
  const [token, setToken] = useState('');

  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Faça login em sua conta
          </h2>
        </div>
        <LoginForm setToken={setToken} token={token} />
      </div>
    </div>
  );
}
