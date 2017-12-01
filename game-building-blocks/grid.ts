import { Cell } from "./cell";


export class Grid {
    grid: Cell[][];
    constructor(maxRow: number, maxColumn: number) {
        this.grid = new Cell[maxRow][maxColumn];
    }

    markCellAsMine(row: number, col: number) {
        const cell = this.grid[row][col];
    }

    openCell(row: number, col: number) {
        // Check if the cell is a mine
        // If mine, you are a gonner
        // Else, open the cell and display/return the value
    }
    
}