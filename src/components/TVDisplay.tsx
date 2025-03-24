import { useGameStore } from '../store/useGameStore';

const TVDisplay = () => {
  const { isConsoleOn, selectedGame } = useGameStore();

  return (
    <div
      className="absolute border border-lime-500 text-lime-400 font-mono text-sm flex items-center justify-center text-center"
      style={{
        top: '23.5%',
        left: '34.5%',
        width: '31%',
        height: '26%',
        backgroundColor: '#000',
      }}
    >
      {isConsoleOn ? (
        selectedGame ? (
          <div>
            <p className="mb-1">Jugando:</p>
            <strong>{selectedGame.title}</strong>
          </div>
        ) : (
          <p>Inserta un cartucho...</p>
        )
      ) : (
        <p>Consola apagada</p>
      )}
    </div>
  );
};

export default TVDisplay;