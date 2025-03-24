import { useGameStore } from '../store/useGameStore';
import nesConsole from '../assets/NES.png';
import nesController from '../assets/NESController.png';

const Console = () => {
  const { isConsoleOn, toggleConsole } = useGameStore();

  return (
    <div className="">
      {/* NES + Control debajo de la TV */}
      <div className="flex justify-center items-center gap-10 mt-4">
          {/* NES Console */}
          <div className="relative w-[150px] nes-pointer " onClick={toggleConsole}>
            <img
              src={nesConsole}
              alt="NES Console"
              className="w-full drop-shadow-lg hover:scale-105 transition-transform"
            />
            <div
              className={`absolute top-2 right-2 w-2 h-2 rounded-full ${isConsoleOn ? 'bg-red-500' : 'bg-zinc-700'}`}
            />
          </div>
  
          {/* NES Controller */}
          <img
            src={nesController}
            alt="NES Controller"
            className="w-[140px] drop-shadow-md opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
    </div>
  );
};

export default Console;
