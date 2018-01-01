import { Cell } from "./cell";

import * as R from 'ramda';

export type Grid = Array<Array<Cell>>;
// Operations that could be performed on the grid

const createGrid = (maxRows: number, maxColumns: number): Grid => {
    const grid: Array<Array<Cell>> = [];
    R.range(0, maxRows).forEach(row => {
        grid.push(R.range(0, maxColumns).map(col => {
            return {
                numberOfAdjacentMines: -1,
                isMine: false,
                isOpened: false
            }
        }));
    })
    return grid;
}

const markCellAsMine = (grid: Grid, row: number, col: number): Grid => {
    const cellPath = R.lensPath([row, col, 'isMine']);
    return R.set(cellPath, true, grid);
}

const isCellAMine = (grid: Grid, row: number, col: number): boolean => {
    const cellPath = R.lensPath([row, col, 'isMine']);
    return R.view(cellPath, grid);
}

const openCell = (grid: Grid, row: number, col: number): Grid => {
    // Mark the cell as open
    const cellPath = R.lensPath([row, col, 'isOpen']);
    return R.set(cellPath, true, grid);
}

const updateMineInfo = (grid: Grid): Grid => {
    let newGrid = grid;
    grid.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellPath = R.lensPath([rowIndex, colIndex, 'numberOfAdjacentMines'])
            newGrid = R.set(cellPath,
                getAdjacentMinesCount.call(null, grid, rowIndex, colIndex), newGrid);
        });
    });
    return newGrid;
}

const getAdjacentMinesCount = (grid: Grid, row: number, col: number): number => {
    let minesCount = 0;
    R.range(row - 1, row + 1).forEach(rowIndex => {
        R.range(col - 1, col + 1).forEach(colIndex => {
            if (rowIndex < 0 || colIndex < 0 || rowIndex >= grid.length || colIndex >= grid[0].length) {
                return;
            }
            const cell = grid[rowIndex][colIndex];
            if (cell.isMine || (rowIndex === row && colIndex === col)) {
                return;
            }
            minesCount++;
        })
    });
    return minesCount;
}

const prettyFormatGrid = (grid: Grid): string => {
    return grid.map(row => row.map(cell => cell.numberOfAdjacentMines)
        .join(' ')
        .replace(/-1/g, '*'))
        .join('\n');
}

const prettyFormatNakedGrid = (grid: Grid): string => {
    return grid.map(row => row.map(cell => cell.isOpened ? cell.numberOfAdjacentMines : '-')
        .join(' ')
        .replace(/-1/g, '*'))
        .join('\n');
}

export default {
    createGrid,
    markCellAsMine,
    prettyFormatGrid,
    prettyFormatNakedGrid,
    openCell,
    updateMineInfo,
    isCellAMine
}
