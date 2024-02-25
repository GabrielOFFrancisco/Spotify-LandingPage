import { SideBar } from './components/SideBar';
import { BottomBar } from './components/BottomBar';

function App() {
  return (
    <div className='h-screen bg-gradient-to-b from-stone-900 to-stone-950'>
      <SideBar />
      <BottomBar />
    </div>
  );
}

export default App;
