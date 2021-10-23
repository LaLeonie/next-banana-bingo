interface Score {
  initialScore: number;
  extraScore: number;
}

export const scoreCalculator = (scoreObj: Score) => {
  return scoreObj.initialScore + scoreObj.extraScore;
};
