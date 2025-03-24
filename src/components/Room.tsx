import Console from "./Console";
import Cartucho from "./Cartucho";
import TVDisplayWithFrame from "./TVDisplayWithFrame";
import { Game } from "../types/game";
import picture1 from "../assets/mega-mario.png";
import picture2 from "../assets/retro-blaster.png";
import { useGameStore } from "../store/useGameStore";

const mockGames: Game[] = [
  {
    id: "game-1",
    title: "Mega Mario",
    description: "Un clon retro de Mario Bros.",
    cover: picture1,
  },
  {
    id: "game-2",
    title: "Retro Blaster",
    description: "Shooter espacial de 8-bits.",
    cover: picture2,
  },
];

const Room = () => {
    const { selectedGame } = useGameStore();

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <TVDisplayWithFrame />

      

      {/* Consola */}
      <div className="flex flex-col items-center gap-4 mt-16">
        <Console />
      </div>

      {/* Cartuchos colocados sobre la librera */}
      <div className="absolute right-4 sm:right-2 top-[38%] flex flex-col gap-6">
        {mockGames.map((game) => (
          <div
            key={game.id}
            className={
              selectedGame?.id === game.id
                ? 'animate-pulse border-2 border-yellow-300 rounded-md'
                : ''
            }
          >
            <Cartucho game={game} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Room;
