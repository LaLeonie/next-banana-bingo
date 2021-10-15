export const bingoLogic = (array) => {
  //check for diagnoal Bingo
  const topToBottom = ["A1", "B2", "C3", "D4", "E5"];
  const bottomToTop = ["E1", "D2", "C3", "B4", "A5"];

  const checkArrayContains = (positions, diagonal) => {
    return diagonal.every((elem) => positions.includes(elem));
  };

  if (checkArrayContains(array, topToBottom)) {
    return true;
  }

  if (checkArrayContains(array, bottomToTop)) {
    return true;
  }

  //check for horizontal or vertical Bingo
  const posArr = array.reduce((a, v) => a.concat(v.split("")), []);
  const uniques = [...new Set(posArr)];

  const countOccurrences = (arr, val) =>
    arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

  for (let i = 0; i < uniques.length; i++) {
    const occurences = countOccurrences(posArr, uniques[i]);
    if (occurences === 5) {
      return true;
    }
  }

  return false;
};
