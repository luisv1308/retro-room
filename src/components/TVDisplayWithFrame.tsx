import frame from "../assets/Frame.png";
import { useGameStore } from "../store/useGameStore";

const TVDisplayWithFrame = () => {
  const { isConsoleOn, selectedGame } = useGameStore();

  return (
    <div className="relative w-[1070px] h-[750px]  mx-auto">
      <img
        src={frame}
        alt="TV Frame"
        className="w-full drop-shadow-[18px_5px_4px_rgba(0,0,0,0.5)]"
      />

      <div
        className="absolute"
        style={{
          top: "8.5%",
          left: "6.2%",
          width: "87.5%",
          height: "78.5%",
          backgroundColor: "#000",
          border: "1px solid #4ade80",
          color: "#4ade80",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          fontSize: "0.8rem",
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
    </div>
  );
};

export default TVDisplayWithFrame;
