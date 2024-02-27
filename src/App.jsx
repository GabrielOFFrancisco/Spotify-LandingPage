import { SideBar } from './components/SideBar';
import { BottomBar } from './components/BottomBar';
import { TopBar } from './components/TopBar';

function App() {
  return (
    <div className='flex h-screen bg-gradient-to-b from-stone-900 to-stone-950'>
      <TopBar />
      <SideBar />
      <BottomBar />
    </div>
  );
}

export default App;
