import { create } from "zustand";
import { Game } from "../types/game";

type GameStore = {
    selectedGame: Game | null;
    setSelectedGame: (game: Game | null) => void;
    isConsoleOn: boolean;
    toggleConsole: () => void;
}

export const useGameStore = create<GameStore>((set) => ({
    selectedGame: null,
    setSelectedGame: (game) => set({ selectedGame: game }),
    isConsoleOn: false,
    toggleConsole: () => set((state) => ({ isConsoleOn: !state.isConsoleOn })),
}));