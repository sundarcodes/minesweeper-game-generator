import { Grid } from './game-building-blocks/grid';
import { GameDifficuty, GameLevel } from './game-difficulty/game-difficulty';
import { EasyLevel } from './game-difficulty/easy';

export class Game {
    private movesCount: number;
    private difficultyLevel: GameDifficuty;
    private grid: Grid;
    private isGameOver: boolean;
    constructor() {
        this.movesCount = 0;
        this.isGameOver = false;
    }
    reset() {
        this.movesCount = 0;
    }

    openCell(row: number, col: number) {
        let retVal = 0;
        if (this.isGameOver) {
            return;
        }
        if (this.movesCount === 0) {
            // Create the grid here
            const grid: Grid = new Grid(this.difficultyLevel.maxRows(), this.difficultyLevel.maxCols());
            this.grid = this.difficultyLevel.openFirstCell(grid, row, col);
        } else {
            retVal = this.grid.openCell(row, col);
            if (retVal === -1) {
                console.log('Game over !! You busted a mine');
                console.log(`The mine was at the position ${row}, ${col}`);
                this.isGameOver = true;
            }
        }
        this.movesCount++;
        return retVal;
    }
    setDifficulty(level: GameLevel) {
        switch (level) {
            case GameLevel.Easy:
                this.difficultyLevel = new EasyLevel();
                break;
            case GameLevel.Intermediate:
                // Create Intermediate Level
                break;
            case GameLevel.Tough:
                // Create Tough Level
                break;
            default:
                console.log('Level not supported');
                break;
        }
    }

    displayGrid() {
        this.grid.printGrid();
    }

    displayNakedGrid() {
        console.log(`Total moves was ${this.movesCount}`);
        this.grid.printNakedGrid();
    }
}