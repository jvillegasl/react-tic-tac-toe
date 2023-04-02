export function indexToMatrixCoordinates(index: number, columnsCount: number) {
    const row = Math.floor(index / columnsCount);
    const column = index % columnsCount;

    return [row, column] as const;
}
