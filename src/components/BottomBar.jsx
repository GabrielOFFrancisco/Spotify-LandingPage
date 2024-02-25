import { useState } from 'react';
import { Heart } from 'lucide-react';

export function BottomBar() {
  const [heartColor, setHeartColor] = useState('');

  function handleClick() {
    setHeartColor((prevColor) => (prevColor === '' ? 'green' : ''));
  }

  return (
    <div className='flex bg-stone-900 border-t-2 border-stone-800 h-28 w-screen fixed bottom-0'>
      <div className='flex flex-row mt-3 ml-8'>
        <img src='/imagem-exemplo.jpg' className='w-20 h-20 rounded-sm' />
        <div>
          <h2 className='text-white font-semibold text-base ml-4 mt-4 hover:underline cursor-pointer'>
            Mina do condomínio
          </h2>
          <h2 className='text-zinc-500 font-semibold text-base ml-4 hover:underline cursor-pointer'>
            Seu Jorge
          </h2>
        </div>
        <button className='ml-6' onClick={handleClick}>
          <Heart fill={heartColor} />
        </button>
      </div>
    </div>
  );
}
