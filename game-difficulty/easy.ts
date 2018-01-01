import gridUtil, { Grid } from '../game-building-blocks/grid';

export const MAX_ROWS = 10;
export const MAX_COLS = 10;
export const MAX_MINES = 10;

export function openFirstCell(grid: Grid, row: number, col: number): Grid {
    const newGrid = placeMines(grid, row, col);
    return gridUtil.updateMineInfo(newGrid);
}

function placeMines(grid: Grid, rowNumClicked: number, colNumClicked: number): Grid {
    let numberOfMinesPlaced = 0;
    let newGrid = grid;
    while (numberOfMinesPlaced < MAX_MINES) {
        const colNumToBePlaced = Math.floor(Math.random() * MAX_COLS);
        const rowNumToBePlaced = Math.floor(Math.random() * MAX_ROWS);
        if (gridUtil.isCellAMine(grid, rowNumToBePlaced, colNumToBePlaced) ||
            (rowNumClicked === rowNumToBePlaced && colNumClicked === colNumToBePlaced)) {
            continue;
        }
        newGrid = gridUtil.markCellAsMine(grid, rowNumToBePlaced, colNumToBePlaced);
        numberOfMinesPlaced++;
    }
    return newGrid;
}