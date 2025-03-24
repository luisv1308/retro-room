import { useGameStore } from '../store/useGameStore';
import cartuchoBase from '../assets/Front.png';
import { Game } from '../types/game';

type Props = {
  game: Game;
};

const Cartucho = ({ game }: Props) => {
    const setSelectedGame = useGameStore((state) => state.setSelectedGame);
  
    return (
      <div
        className="relative nes-pointer w-[96px] h-[96px] hover:scale-105 transition-transform"
        onClick={() => setSelectedGame(game)}
      >
        <img src={cartuchoBase} alt="Cartucho NES" className="absolute top-0 left-0 w-full h-full z-0" />
        
        {/* Portada superpuesta */}
        <img
          src={game.cover}
          alt={game.title}
          className="absolute z-10"
          style={{
            top: '2.2%',
            left: '35%',
            width: '54%',
            height: '80%',
            objectFit: 'cover',
          }}
        />
  
        {/* Nombre del juego abajo (opcional) */}
        <div className="absolute bottom-[-1.5rem] w-full text-center text-xs text-white font-mono">
          {game.title}
        </div>
      </div>
    );
  };
  
  export default Cartucho;