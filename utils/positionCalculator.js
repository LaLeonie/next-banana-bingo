export const positionCalculator = (index) => {
  const verts = ["A", "B", "C", "D", "E"];
  const hors = [1, 2, 3, 4, 5];

  const vertPosition = verts[Math.floor(index / 5)];
  const horPosition = hors[Math.floor(index % 5)];
  return vertPosition + horPosition;
};
