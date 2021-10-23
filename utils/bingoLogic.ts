export const bingoLogic = (positionsArr: string[]) => {
  //check for diagnoal Bingo
  const topToBottom: string[] = ["A1", "B2", "C3", "D4", "E5"];
  const bottomToTop: string[] = ["E1", "D2", "C3", "B4", "A5"];

  const checkArrayContains = (positions: string[], diagonal: string[]) => {
    return diagonal.every((elem) => positions.includes(elem));
  };

  if (checkArrayContains(positionsArr, topToBottom)) {
    return true;
  }

  if (checkArrayContains(positionsArr, bottomToTop)) {
    return true;
  }

  //check for horizontal or vertical Bingo
  const splitPositions: string[] = positionsArr.reduce(
    (a, v) => a.concat(v.split("")),
    []
  );
  const uniques: string[] = [...new Set(splitPositions)];

  const countOccurrences = (arr: string[], val: string) =>
    arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

  for (let i = 0; i < uniques.length; i++) {
    const occurences = countOccurrences(splitPositions, uniques[i]);
    if (occurences === 5) {
      return true;
    }
  }

  return false;
};
