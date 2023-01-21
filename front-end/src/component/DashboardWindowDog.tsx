import { useState } from 'react';
import getDogRandom from '../api/dogRandomImage';

export default function DashboardWindowDog() {
  const [dog, setDog] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className='w-full flex flex-col items-center justify-center mt-10 gap-10'>
      <button
        className='border w-1/3 p-4 bg-green-500 hover:bg-green-400 shadow-xl'
        type='submit'
        onClick={async () => {
          setLoading(true);
          const test = await getDogRandom();
          setDog(test);
          setLoading(false);
        }}
      >
        Gerar nova imagem
      </button>

      {loading ? <Loading /> : <img className='w-1/2' src={dog} />}
    </div>
  );
}

const Loading = () => {
  return (
    <div>
      <p>Carregando...</p>
    </div>
  );
};
