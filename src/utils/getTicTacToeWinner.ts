type Coordinates = [number, number];

type LineCoordinates = Coordinates[];

export function getTicTacToeWinner<T extends string | number | boolean>(
    board: (T | undefined)[][]
) {
    let possibleWinnerCombinations: LineCoordinates[] = [];

    let rows: LineCoordinates[] = [];
    let columns: LineCoordinates[] = [];
    let diagonals: LineCoordinates[] = [];
    diagonals[0] = [];
    diagonals[1] = [];

    for (let i = 0; i < 3; i++) {
        let newRow: LineCoordinates = [];
        let newColumn: LineCoordinates = [];

        for (let j = 0; j < 3; j++) {
            newRow.push([i, j]);
            newColumn.push([j, i]);
        }

        rows.push(newRow);
        columns.push(newColumn);
        diagonals[0].push([i, i]);
        diagonals[1].push([i, 2 - i]);
    }

    possibleWinnerCombinations = [...rows, ...columns, ...diagonals];

    for (let index = 0; index < possibleWinnerCombinations.length; index++) {
        const currentLine = possibleWinnerCombinations[index];
        const winner = checkTicTacToeLine(board, currentLine);

        if (winner !== undefined) return winner;
    }
}

function checkTicTacToeLine<T extends string | number | boolean>(
    board: (T | undefined)[][],
    line: LineCoordinates
) {
    const boardValues: (T | undefined)[] = line.map(([i, j]) => board[i][j]);

    const isWinner: boolean =
        boardValues[0] != null &&
        boardValues.every((value) => {
            return value === boardValues[0];
        });

    if (!isWinner) return;

    return boardValues[0];
}
