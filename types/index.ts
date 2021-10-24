export interface Plant {}

interface Game {
  difficulty: string;
  playedToday: boolean;
  apiPlants: Plant[];
}

export interface RootState {
  game: Game;
}
