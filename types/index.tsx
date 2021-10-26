interface Image {
  id: string;
  url: string;
  filename: string;
  size: number;
  type: string;
  width: number;
  height: number;
}

export interface Plant {
  fields: {
    Color: "Green" | "Yellow" | "Red" | "Orange" | "Purple" | "Brown" | "Blue";
    Type: "Fruit" | "Veg";
    Name: string;
    FunFact: string;
    Image: Image[];
    Seasonality: string[];
    Vitamins: string[];
    Difficulty: "hard" | "medium" | "easy";
  };
}

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
