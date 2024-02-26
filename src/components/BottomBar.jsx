import { useState } from 'react';
import {
  Heart,
  Shuffle,
  SkipBack,
  PlayCircle,
  SkipForward,
  Repeat,
  Mic2,
  List,
  Volume2,
  Maximize2,
} from 'lucide-react';

export function BottomBar() {
  const [heartColor, setHeartColor] = useState('');

  function handleClick() {
    setHeartColor((prevColor) => (prevColor === '' ? 'green' : ''));
  }

  return (
    <div className='flex items-center bg-stone-900 border-t-2 border-stone-800 h-28 w-screen fixed bottom-0'>
      <div className='flex flex-row items-center ml-8'>
        <img src='/imagem-exemplo.jpg' className='w-16 h-16 rounded-sm mt-2' />
        <div>
          <h2 className='text-white font-semibold text-base ml-4 mt-4 hover:underline cursor-pointer'>
            Mina do condomínio
          </h2>
          <h2 className='text-zinc-500 font-semibold text-base ml-4 hover:underline cursor-pointer'>
            Seu Jorge
          </h2>
        </div>
        <button className='ml-6 mt-6' onClick={handleClick}>
          <Heart fill={heartColor} color='transparent' />
        </button>
      </div>
      <div className='flex flex-col items-center ml-64'>
        <div className='flex items-center gap-3 space-x-4'>
          <Shuffle color='white' />
          <SkipBack color='white' fill='white' />
          <PlayCircle size={50} color='white' strokeWidth={1} />
          <SkipForward color='white' fill='white' />
          <Repeat color='white' />
        </div>
        <div className='flex items-center gap-2 space-y-4'>
          <span className='text-xs text-zinc-500 mt-4'>2:15</span>
          <div className='h-1 rounded-full w-96 bg-zinc-600'>
            <div className='bg-zinc-200 w-28 h-1 rounded-full' />
          </div>
          <span className='text-xs text-zinc-500'>6:41</span>
        </div>
      </div>
      <div className='flex items-center space-x-5 mr-6 ml-64 mt-3'>
        <button>
          <Mic2 color='white' size={20} />
        </button>
        <button>
          <List color='white' size={20} />
        </button>
        <button>
          <Volume2 color='white' size={20} />
        </button>
        <div className='h-1 rounded-full w-20 bg-zinc-600'>
          <div className='bg-zinc-200 w-12 h-1 rounded-full' />
        </div>
        <button>
          <Maximize2 color='white' size={20} />
        </button>
      </div>
    </div>
  );
}
