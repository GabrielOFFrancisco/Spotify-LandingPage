import { ChevronLeftCircle } from 'lucide-react';
import { ChevronRightCircle } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

export function TopBar() {
  return (
    <div className='flex flex-row fixed w-full h-14 bg-transparent justify-between'>
      <div className='flex mt-3 space-x-4 ml-72 mr-96'>
        <button>
          <ChevronLeftCircle
            size={28}
            fill='#131313'
            color='#7B7B7B'
            strokeWidth={1}
          />
        </button>
        <button>
          <ChevronRightCircle
            size={28}
            fill='#131313'
            color='#7B7B7B'
            strokeWidth={1}
          />
        </button>
      </div>

      <button className='flex mt-5 mr-12 items-center bg-neutral-950 w-32 h-8 rounded-2xl'>
        <img
          src='/foto-usuario.jpeg'
          alt='user-image'
          className='w-7 h-7 rounded-full'
        />
        <p className='ml-2 text-white text-sm'>Gabriel</p>
        <ChevronDown color='white' strokeWidth={1} className='ml-2' />
      </button>
    </div>
  );
}
