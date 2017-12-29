import { Grid } from './game-building-blocks/grid';
import { GameDifficuty, GameLevel } from './game-difficulty/game-difficulty';
import { EasyLevel } from './game-difficulty/easy';

export class Game {
    private movesCount;
    private difficultyLevel: GameDifficuty;
    private grid: Grid;
    constructor() {
        this.movesCount = 0;
    }
    reset() {
        this.movesCount = 0;
    }

    openCell(row: number, col: number) {
        if (this.movesCount === 0) {
            this.grid = this.difficultyLevel.openFirstCell(row, col);
        } else {
            
        }
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
}