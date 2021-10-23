export const positionCalculator = (index: number) => {
  const verts: string[] = ["A", "B", "C", "D", "E"];
  const hors: number[] = [1, 2, 3, 4, 5];

  const vertPosition: string = verts[Math.floor(index / 5)];
  const horPosition: number = hors[Math.floor(index % 5)];
  return vertPosition + horPosition;
};
