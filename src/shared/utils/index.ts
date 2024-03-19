export const generateInitialMatrix = (length: number): string[][] | [] => {
  if (!length) return [];
  const value = Array.from({ length }, () => Array(length).fill(""));

  return value;
};

export const rotateToTheLeft = (matrix: string[][]) => {
  const matrixLength = matrix.length;
  const currentMatrix = generateInitialMatrix(matrixLength) as string[][];

  for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < matrixLength; j++) {
      currentMatrix[matrixLength - 1 - j][i] = matrix[i][j];
    }
  }

  return currentMatrix;
};

export const autoFillMatrix = (matrixLength: number) => {
  const matrix = generateInitialMatrix(matrixLength);

  const value = matrix.reduce(
    (acc: { matrix: string[][]; lastValue: number }, el) => {
      const newElement = el.map((_) => {
        acc.lastValue = acc.lastValue + 1;

        return String(acc.lastValue + 1);
      });

      return { matrix: [...acc.matrix, newElement], lastValue: acc.lastValue };
    },
    { matrix: [], lastValue: 0 }
  );

  return value.matrix;
};
