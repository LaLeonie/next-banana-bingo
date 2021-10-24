export interface Plant {}

interface Today {
  initialScore: number;
  extraScore: number;
  dailyPlants: Plant[];
  day: string;
  victory: boolean;
}

interface ThisWeek {
  daysPlayed: string[];
  weekScore: number;
  weeklyPlants: Plant[];
}

interface Game {
  difficulty: string;
  playedToday: boolean;
  apiPlants: Plant[];
}

interface User {
  totalScore: number;
  today: Today;
  thisWeek: ThisWeek;
}

export interface RootState {
  game: Game;
  user: User;
}
