interface PlantField {
  Difficulty: string;
}

interface Plant {
  fields: PlantField;
}

export const filterPlantsByDifficulty = (
  plants: Plant[],
  difficulty: string
) => {
  if (difficulty === "easy") {
    return plants.filter((el) => el.fields.Difficulty === "easy");
  }

  if (difficulty === "medium") {
    return plants.filter((el) => el.fields.Difficulty !== "hard");
  }

  return plants;
};
