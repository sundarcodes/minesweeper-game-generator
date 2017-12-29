import { Cell } from "./cell";


export class Grid {
    grid: Cell[][];
    constructor(private maxRow: number, private maxColumn: number) {
        this.grid = [];
        for(let row = 0; row < maxRow; row++) {
            const colsArray = [];
            for(let col = 0; col < maxColumn; col++) {
                colsArray.push(new Cell(row, col));
            }
            this.grid.push(colsArray);
        }
    }

    markCellAsMine(row: number, col: number) {
        const cell = this.grid[row][col];
        cell.setContentAsMine();
    }

    openCell(row: number, col: number) {
        // Check if the cell is a mine
        // If mine, you are a gonner
        // Else, open the cell and display/return the value
        const cell = this.grid[row][col];
        if (cell.isContentAMine()) {
            return -1;
        } else {
            cell.openCell();
            return 0;
        }
    }

    isCellAMine(row: number, col: number) {
        return this.grid[row][col].isContentAMine();
    }

    updateMineInfo() {
        // Go over the entire cells and mark 
        // cells with mine value indicators
        for (let row = 0; row < this.maxRow; row++) {
            for (let col = 0; col < this.maxColumn; col++) {
                // Continue if current cell is a mine
                // If not, compute the mines in adjacent cells and update the value
                const currentCell = this.grid[row][col];
                if (currentCell.isContentAMine()) {
                    continue;
                }
                const numberOfMines = this.getMinesCountForCell(row, col);
                currentCell.content = numberOfMines;
            }
        }
    }

    getMinesCountForCell(row: number, col: number): number {
        // Check Left  
        let minesCount = 0;
        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                if (i < 0 || j < 0 || i >= this.maxRow || j >= this.maxColumn) {
                    continue;
                }
                const cell = this.grid[i][j];
                // Skip when cell is undefined
                // or is the cell to get the count for
                // or cell content is not a mine
                if (!cell || (i === row && j === col) ||
                    !cell.isContentAMine()) {
                    continue;
                }
                minesCount++;
            }
        }
        return minesCount;
    }

    printGrid() {
        this.grid.forEach(row => {
            console.log(row.map(cell => {
                if (cell.isCellOpened()) {
                    return cell.content;
                } else {
                    return '-'
                }
            }).join(' ').replace(/-1/g,'*'));
        });
        console.log('');
    }

    printNakedGrid() {
        const str = this.grid.map(row => row.map(cell => cell.content).join(' ').replace(/-1/g,'*')).join('\n');
        console.log(str);
    }
}