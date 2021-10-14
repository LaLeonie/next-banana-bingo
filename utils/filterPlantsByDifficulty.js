export const filterPlantsByDifficulty = (plants, difficulty) => {
  if (difficulty === "easy") {
    return plants.filter((el) => el.fields.Difficulty === "easy");
  }

  if (difficulty === "medium") {
    return plants.filter((el) => el.fields.Difficulty !== "hard");
  }

  return plants;
};
