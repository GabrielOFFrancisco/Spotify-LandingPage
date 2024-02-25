import { Home } from 'lucide-react';
import { Search } from 'lucide-react';
import { Library } from 'lucide-react';
import { PlusSquare } from 'lucide-react';

export function SideBar() {
  return (
    <div className='bg-black h-screen w-72 flex-shrink-0'>
      <div className='flex flex-col items-center'>
        <img src='/spotify-logo.svg' alt='Logo spotify' className='w-36 mt-2' />
      </div>
      <button className='flex flex-row space-x-10 mt-8 w-64 h-12 ml-4 hover:bg-stone-800 rounded-md'>
        <Home color='white' size={28} className='ml-4 mt-2' />
        <h2 className='text-white font-semibold text-lg mt-2'>Home</h2>
      </button>
      <button className='flex flex-row space-x-10 mt-3 w-64 h-12 ml-4 hover:bg-stone-800 rounded-md'>
        <Search color='white' size={28} className='ml-4 mt-2' />
        <h2 className='text-white font-semibold text-lg mt-2'>Search</h2>
      </button>
      <button className='flex flex-row space-x-10 mt-3 w-64 h-12 ml-4 hover:bg-stone-800 rounded-md'>
        <Library color='white' size={28} className='ml-4 mt-2' />
        <h2 className='text-white font-semibold text-lg mt-2'>Your library</h2>
      </button>

      <button className='flex flex-row space-x-8 mt-12 w-64 h-12 ml-4 hover:bg-stone-800 rounded-md'>
        <PlusSquare fill='white' size={40} className='ml-3 mt-1' />
        <h2 className='text-white font-semibold text-lg mt-2'>
          Create playlist
        </h2>
      </button>
      <button className='flex flex-row space-x-8 mt-3 w-64 h-12 ml-4 hover:bg-stone-800 rounded-md'>
        <img src='/heart.svg' className='ml-4 mr-1 mt-2' />
        <h2 className='text-white font-semibold text-lg mt-2'>Liked songs</h2>
      </button>
      <button className='flex flex-row space-x-8 mt-3 w-64 h-12 ml-4 hover:bg-stone-800 rounded-md'>
        <img src='/episodes.svg' className='ml-4 mr-1 mt-2' />
        <h2 className='text-white font-semibold text-lg mt-2'>Your episodes</h2>
      </button>

      <div className='flex flex-col mt-12 w-64 h-12 ml-4 space-y-4 hover:bg-stone-800 rounded-md'>
        <h2 className='text-white font-semibold text-lg ml-4 mt-2'>
          Favorites
        </h2>
      </div>
      <div className='flex flex-col mt-3 w-64 h-12 ml-4 space-y-4 hover:bg-stone-800 rounded-md'>
        <h2 className='text-white font-semibold text-lg ml-4 mt-2'>
          Daily Mix 1
        </h2>
      </div>
    </div>
  );
}
