import { SideBar } from './components/SideBar';
import { BottomBar } from './components/BottomBar';
import { TopBar } from './components/TopBar';
import { Usercards } from './components/UserCards';
import { ArtistCard } from './components/ArtistCard';

function App() {
  return (
    <div className='flex flex-col w-screen h-screen bg-gradient-to-b from-stone-900 to-stone-950'>
      <TopBar />
      <SideBar />
      <BottomBar />
      <div className='flex flex-col h-2 ml-72 mt-24'>
        <h1 className='text-white font-semibold text-3xl ml-1'>Good morning</h1>
        <div className='flex flex-row mt-6 gap-8 ml-1'>
          <Usercards icon={'/heart.svg'} title='Liked songs' />
          <Usercards icon={'/top-brazil.jpg'} title='Top 50 - Brazil' />
          <Usercards icon={'/imagem-exemplo.jpg'} title='América Brasil' />
        </div>
      </div>

      <div className='flex flex-col h-2 ml-72 mt-48'>
        <h1 className='text-white font-semibold text-3xl ml-1'>
          Artists you might like
        </h1>
        <div className='flex flex-row mt-6 gap-8 ml-1'>
          <ArtistCard icon={'/djavan.jfif'} title='Djavan' />
          <ArtistCard icon={'/raul.jfif'} title='Raul Seixas' />
          <ArtistCard icon={'/tim.jfif'} title='Tim Maia' />
        </div>
      </div>
    </div>
  );
}

export default App;
