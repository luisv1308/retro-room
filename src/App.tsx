import Room from './components/Room';
import roomBg from './assets/retro-room.jpeg';

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white overflow-x-hidden"
      style={{ backgroundImage: `url(${roomBg})` }}
    >
      <div className="bg-black/40 min-h-screen flex flex-col items-center justify-center p-6">
        <Room />
      </div>
    </div>
  );
}

export default App;