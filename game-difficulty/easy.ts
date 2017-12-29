import { GameDifficuty } from './game-difficulty';
import { Grid } from '../game-building-blocks/grid';
import { Cell } from '../game-building-blocks/cell';
const MAX_ROWS = 10;
const MAX_COLS = 10;
const MAX_MINES = 10;
export class EasyLevel implements GameDifficuty {
    openFirstCell(row: number, col: number): Grid {
        const grid = this.placeMines(row, col);
        grid.updateMineInfo();
        return grid;
    }

    placeMines(rowNumClicked: number, colNumClicked: number): Grid {
        const grid: Grid = new Grid(MAX_ROWS, MAX_COLS);
        let numberOfMinesPlaced = 0;
        while (numberOfMinesPlaced < MAX_MINES) {
            const colNumToBePlaced = Math.floor(Math.random() * MAX_COLS);
            const rowNumToBePlaced = Math.floor(Math.random() * MAX_ROWS);
            if (grid.isCellAMine(rowNumToBePlaced, colNumToBePlaced) ||
                (rowNumClicked === rowNumToBePlaced && colNumClicked === colNumToBePlaced)) {
                continue;
            }
            grid.markCellAsMine(rowNumToBePlaced, colNumToBePlaced);
            numberOfMinesPlaced++;
        }
        return grid;
    }
}