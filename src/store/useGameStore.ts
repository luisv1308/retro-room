import { create } from "zustand";

type Game = {
    id: string;
    title: string;
    description: string;
    cover: string;
}

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