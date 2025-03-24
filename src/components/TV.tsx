import { useGameStore } from '../store/useGameStore';

const TV = () => {
  const { isConsoleOn, selectedGame } = useGameStore();

  return (
    <div className="nes-container with-title is-dark p-4 m-4 shadow-lg max-w-xl mx-auto">
      <p className="title">Pantalla CRT</p>
      {!isConsoleOn ? (
        <p className="nes-text is-disabled">La consola está apagada...</p>
      ) : selectedGame ? (
        <>
          <h2 className="nes-text is-warning text-lg mb-2">Jugando: {selectedGame.title}</h2>
          <p>{selectedGame.description}</p>
          <div className="mt-4 bg-black border border-white p-4 text-green-400 font-mono text-sm">
            [ Aquí irá el juego embebido o el canvas de Phaser ]
          </div>
        </>
      ) : (
        <p className="nes-text is-primary">Inserta un cartucho para jugar</p>
      )}
    </div>
  );
};

export default TV;
